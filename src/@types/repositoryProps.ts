interface screenshotsProps {
  id: number
  image: string
  alt: string
}

export interface InfosProps {
  description: string
  descriptionLink?: string
  screenshotsTitle: string
  screenshots: screenshotsProps[]
}

export interface RepositoryProps {
  id: number
  title: string
  image: string
  alt: string
  path: string
  infos?: InfosProps
}
