import { PluginFunc, ConfigType } from 'dayjs';

export const calendarLocalization: PluginFunc
export const relative: PluginFunc

declare module 'dayjs' {
  interface Dayjs {
    relativeNow(): string
    relative(compared: ConfigType): string
  }
}