'use client';

interface SelectedLevelsCardProps {
  currentDojo: string;
  fullLabel: string;
  compactLabel: string;
}

export function SelectedLevelsCard({
  currentDojo,
  fullLabel,
  compactLabel,
}: SelectedLevelsCardProps) {
  const isKana = currentDojo === 'kana';

  return (
    <div className='rounded-xl bg-(--card-color) p-4'>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-row items-center gap-2'>
          <div className='flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-(--secondary-color) bg-(--secondary-color)'>
            <svg
              className='h-3 w-3 text-(--background-color)'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={3}
                d='M5 13l4 4L19 7'
              />
            </svg>
          </div>
          <span className='text-sm text-(--main-color)'>
            {isKana ? 'Selected Groups:' : 'Selected Levels:'}
          </span>
        </div>
        <span className='text-sm break-words text-(--secondary-color) md:hidden'>
          {compactLabel}
        </span>
        <span className='hidden text-sm break-words text-(--secondary-color) md:inline'>
          {fullLabel}
        </span>
      </div>
    </div>
  );
}
