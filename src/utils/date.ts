import { format, formatDistanceToNow } from 'date-fns';

export function formatDate(date: string | Date, pattern: string = 'PPP'): string {
  return format(new Date(date), pattern);
}

export function formatRelativeTime(date: string | Date): string {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}