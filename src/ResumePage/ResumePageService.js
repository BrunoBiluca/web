import { isDebugMode } from 'config/server';
import main from './resumes/Resume.Full';
import unity from './resumes/Resume.Unity';

class ResumePageService {
  static getContent() {
    if (isDebugMode)
      return main()

    return main()
  }
}

export default ResumePageService;