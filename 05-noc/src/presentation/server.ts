import { CronService } from "./cron/cron-service";
import { CheckService } from "../domain/use-cases/checks/check-service";

export class Server {
  public static run(): void{
    console.log('Server is running...');
    CronService.createJob(
      '*/5 * * * * *',
      () => {
        // const url = 'https://api.sharedvision.es/public/api/posts/last-posts';
        const url = 'https://google.com';
        new CheckService(
          () => {
            console.log(`${url} is up!`);
          },
          (error: string) => {
            console.log(`Error: ${error}`);
          }
        ).execute(url);
      }
    );
  }
}