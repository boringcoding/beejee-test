import { SortDirection } from '../SortDirection'
import { SortField } from '../SortField'

export interface FetchTasksInput {
  sortDirection: SortDirection
  sortField: SortField
  page: number
}
