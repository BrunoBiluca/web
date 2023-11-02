import { isDebugMode, isProduction } from 'config/server';
import main from './resumes/Resume.Full';
import unity from './resumes/Resume.Unity';

class ResumePageService {
  static getContent() {

    if (isProduction)
      return main()
    else if (isDebugMode)
      return unity()
  }
}

export default ResumePageService;