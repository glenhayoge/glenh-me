import type { NextApiRequest, NextApiResponse } from 'next';
import Fuse from 'fuse.js';
import { allDocuments } from 'contentlayer/generated';
import { pick } from '@contentlayer/utils';

// Fuse.js config
const options = {
  includeScore: true,
  keys: [
    {
      name: 'title',
      weight: 1
    },
    {
      name: 'description',
      weight: 0.5
    },
    {
      name: 'slug',
      weight: 0.2
    }
  ],
  limit: 2,
  threshold: 0.5
};

const fuseInstance = new Fuse(allDocuments, options);

// Next.js API config
const config = {
  api: {
    bodyParser: false
  }
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { q } = req.query;

  if (method === 'GET' && q !== undefined) {
      return res.status(200).send(fuseInstance.search(q));
  } else {
    return res.status(400).json([]);
  }
}