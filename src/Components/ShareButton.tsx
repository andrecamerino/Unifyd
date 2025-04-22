import React from 'react'
import { ShareIcon } from '@heroicons/react/24/outline'

const ShareButton = ({shareAmount}: {shareAmount: number}) => {
  return (
    <>
    <div className="flex justify-center items-center gap-2">
            <ShareIcon className="w-auto h-4 text-text-color" />
            <div className="justify-start text-text-Color text-[9.33px] font-normal  leading-none">
              {(shareAmount > 0) ? `${shareAmount} Shares` : "Share"}
            </div>
          </div>
    </>
  )
}

export default ShareButton