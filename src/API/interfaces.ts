
export interface Contact {
  id: string,
  firstName: string,
  lastName: string,
  contactTags: string[],
  deals: string[],
  geoIps: string[],
}

export interface ContactTag {
  contact: string,
  id: string,
  tag: string
}

export interface Deal {
  currency: string,
  id: string,
  contact: string,
  title: string,
  value: string,
}

export interface Tag  {
  id: string,
  tag: string,
}

export interface GeoIps {
  id: string,
  geoAddress: string,
}

export interface GeoAddress  {
  city: string,
  id: string,
  state: string,
  country: string,
}
