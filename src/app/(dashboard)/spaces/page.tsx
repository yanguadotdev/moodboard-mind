import { EmptySpace } from './EmptySpace'
import { Spaces } from './Spaces'

const isEmptySpace = true

export default function Page() {
  if (isEmptySpace) return <EmptySpace />
  return <Spaces />
}
