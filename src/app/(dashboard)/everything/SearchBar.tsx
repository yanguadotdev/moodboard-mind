import ArticleIcon from '@/assets/icons/article.svg'
import ImageIcon from '@/assets/icons/image.svg'
import NoteIcon from '@/assets/icons/note.svg'
import QuoteIcon from '@/assets/icons/quote.svg'
import PostIcon from '@/assets/icons/tweet.svg'
import VideoIcon from '@/assets/icons/video.svg'
import WebPageIcon from '@/assets/icons/web-page.svg'

export function SearchBar() {
  return (
    <>
      <div className='mb-4 peer'>
        <SearchInput />
      </div>
      <div className='mb-4 hidden peer-focus-within:block'>
        <SearchSuggestions />
      </div>
    </>
  )
}

function SearchInput() {
  return (
    <div
      className="
                relative pb-4 border-b border-b-[#d0d7e2] group
                after:(content-['']_absolute_w-fullh-[1px]_bg-[rgb(0_0_0/30%)]_bottom-[-1px]_left-0_scale-x-0_origin-left_transition_duration-1000)
                hover:after:scale-x-100
                focus-within:after:hidden
            "
    >
      <input
        className='
                    w-full h-22 text-7xl outline-none 
                    font-serif italic font-normal text-black
                    placeholder:text-[rgb(116_130_151/_40%)] group-hover:placeholder:opacity-50
                '
        type='text'
        placeholder='Search my mind...'
      />
    </div>
  )
}

const suggestions: Array<{
  name: string
  icon: React.ComponentType<React.ComponentPropsWithoutRef<'svg'>>
}> = [
  { name: 'WebPages', icon: WebPageIcon },
  { name: 'Videos', icon: VideoIcon },
  { name: 'Quotes', icon: QuoteIcon },
  { name: 'X Posts', icon: PostIcon },
  { name: 'Images', icon: ImageIcon },
  { name: 'Articles', icon: ArticleIcon },
  { name: 'Notes', icon: NoteIcon }
]

function SearchSuggestions() {
  const suggestionElements = suggestions.map((suggestion) => {
    const SuggestionIcon = suggestion.icon
    return (
      <li
        key={suggestion.name}
        className='
                    flex items-center gap-2
                    bg-white
                    rounded-[18px]
                    text-[#40516a]
                    font-light
                    pl-3.75
                    pr-3.75
                    cursor-pointer
                    hover:shadow-[6px_6px_11px_rgb(116_130_151/30%)]
                '
      >
        <SuggestionIcon className='size-4.5 text-[#748297]' />
        {suggestion.name}
      </li>
    )
  })

  return <ul className='flex h-8.75 gap-2.5'>{suggestionElements}</ul>
}
