import { Controller, Get } from '@nestjs/common';
import { RssService, Subscription } from './rss/rss.service';
import { OpmlService } from './rss/opml.service';

@Controller()
export class AppController {
  constructor(
    private readonly rssService: RssService,
    private readonly opmlService: OpmlService,
  ) {}

  @Get()
  async init(): Promise<Subscription[]> {
    const opmlFile = await this.opmlService.getOpmlFile();
    return await this.rssService.parseOpml(opmlFile);
    // return await this.rssService.fetchRss(subs[0].xmlUrl);
  }
}
