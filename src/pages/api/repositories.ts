// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { RepositoryProps } from '@/@types/repositoryProps'
import repositoriesData from '@/utils/repositoriesData'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<RepositoryProps[]>
) {
  res.status(200).json(repositoriesData)
}
