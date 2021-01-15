import  './ContactRow.css'
import { Contact, Deal, GeoAddress, Tag} from '../../API/interfaces';
import { abbrState } from '../../utils/abbrState';

interface Props {
  contact: Contact;
  deals: Deal[],
  tags: Tag[],
  geoAddress: GeoAddress;
}

const UNICODES: {[key: string]: string} = {
  usd: 'US\u0024',
  aud: 'A\u0024',
  eur: '\u20AC'
}

const ContactRow = ({ contact, deals,  tags, geoAddress} : Props) => {
  const { firstName, lastName } = contact;

  // wasnt sure if I was supposed to convert all the values to one currency and
  // total them, or list the total for each currency; I went with the second
  let currTotals: {[key: string]: string} = {}
  for (let i = 0; i < deals.length; i++) {
    if (!Object.keys(currTotals).includes(deals[i].currency)){
      currTotals[deals[i].currency] = deals[i].value
    } else {
      currTotals[deals[i].currency] += deals[i].value
    }
  }
  let totals = Object.keys(currTotals).map(t => `${UNICODES[t]}${currTotals[t]}`).join(', ')

  let tagNames = tags.map(t => t.tag).join(', ')

  return (
      <tr data-testid="contact-row" className="contact-row">
        <td className="contact-name"> 
          <span className="profile"> {`${firstName[0]}${lastName[0]}`} </span>
          {`${firstName} ${lastName}`} 
        </td>
        <td> {totals} </td>
        <td> {geoAddress ? `${geoAddress.city}, ${abbrState(geoAddress.state, 'abbr')}, ${geoAddress.country}` : ''} </td>
        <td> {deals.length} </td>
        <td> {tags  ? tagNames : ''} </td>
      </tr>
    )
}

export default ContactRow;