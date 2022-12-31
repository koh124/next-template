import type { NextApiHandler ,NextApiRequest, NextApiResponse } from 'next'

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.json({
    current_user: '',
    status: 'ok',
    json: 'true'
  });
  return res.status(200).send('done');
}

export default handler;
