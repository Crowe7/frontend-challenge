// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// gonna build my api without using next.js 
// will leave this file  just in case

import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
