import { Injectable } from '@nestjs/common';
import { CreateLinkDto } from '@lssm/package.api/links/dto/create-link.dto';
import { UpdateLinkDto } from '@lssm/package.api/links/dto/update-link.dto';
import { Link } from '@lssm/package.api/links/entities/link.entity';

@Injectable()
export class LinksService {
  private readonly _links: Link[] = [
    {
      id: 0,
      title: 'Docs',
      url: 'https://turbo.build/repo/docs',
      description:
        'Find in-depth information about Turborepo features and API.',
    },
    {
      id: 1,
      title: 'Learn',
      url: 'https://turbo.build/repo/docs/handbook',
      description: 'Learn more about monorepos with our handbook.',
    },
    {
      id: 2,
      title: 'Templates',
      url: 'https://turbo.build/repo/docs/getting-started/from-example',
      description:
        'Choose from over 15 examples and deploy with a single click.',
    },
    {
      id: 3,
      title: 'Deploy',
      url: 'https://vercel.com/new',
      description:
        'Instantly deploy your Turborepo to a shareable URL with Vercel.',
    },
  ];

  create(createLinkDto: CreateLinkDto) {
    return `This action adds a new link ${JSON.stringify(createLinkDto)}`;
  }

  findAll() {
    return this._links;
  }

  findOne(id: number) {
    return this._links.find((link) => link.id === id);
    // return `This action returns a #${id} link`;
  }

  update(id: number, updateLinkDto: UpdateLinkDto) {
    return `This action updates a #${id} link ${JSON.stringify(updateLinkDto)}`;
  }

  remove(id: number) {
    return `This action removes a #${id} link`;
  }
}