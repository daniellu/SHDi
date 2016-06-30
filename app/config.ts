
export class EnvConfig {
  env : 'dev';

  getAssetFolder(): string{
      if(this.env == 'dev'){
          return 'app';
      }
      else{
          return  'dist';
      }

  }
}