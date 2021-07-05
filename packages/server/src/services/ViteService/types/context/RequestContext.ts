import {PageProps} from "./PageProps";
import {SessionData} from "express-session";
import {IncomingHttpHeaders} from "http";

export type SessionType = Partial<SessionData>;

export type RequestContext = {
  stateSnapshot: {
    [key: string]: any;
  };
  user?: {
    email: string;
  };
  pageProps: PageProps;
  session?: SessionType;
  headers?: IncomingHttpHeaders;
  originalUrl?: string;
};

interface IPullstateSnapshot {
  allState: {
    [storeName: string]: any;
  };
  asyncResults: {
    [key: string]: any;
  };
  asyncActionOrd: {
    [key: string]: number;
  };
}
