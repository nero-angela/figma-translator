import { PlatformLocale } from "../platform/platform.interface";

export enum Platform {
  ios = "ios",
  android = "android",
}

export enum TemplateType {
  grapic,
  mobile,
  tablet,
}

export type Size = {
  w: number;
  h: number;
};

export type Position = {
  x: number;
  y: number;
};

export type Frame = {
  frameName: (platformLocale: PlatformLocale, count: number) => string;
  maxCount: number;
  size: Size;
};

export type Template = {
  name: string;
  platform: Platform;
  type: TemplateType;
  frame: Frame;
};

export interface TemplateService {
  getTemplates(platform: Platform): Template[];
}

export interface TemplateRepository {
  templates: {
    [platform in Platform]: Template[];
  };
}
