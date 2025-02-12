export interface RFX {
  id: string
  organization: string
  title: string
  posted: string
  due: string
  contact: {
    name: string
    email: string
    phone?: string
  }
}

