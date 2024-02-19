// import { HttpService } from '@nestjs/axios';
// import { HtppAdapter } from '../interfaces/htpp-adapter.interfaces';
// import { firstValueFrom, map } from 'rxjs';

// export class AxiosAdapter implements HtppAdapter {
//   private httpService: HttpService;

//   async get<T>(url: string): Promise<T> {
//     try {
//       const results = await firstValueFrom(
//         this.httpService.get<T>(url).pipe(map((res) => res.data.results)),
//       );
//     } catch (error) {}
//   }
// }
