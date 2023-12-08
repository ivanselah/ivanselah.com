import { CommonUtils } from '@/utils/common';
import React from 'react';
import { FaCheck } from 'react-icons/fa6';
import { PiWarningCircleFill } from 'react-icons/pi';

export type ContactBannerProps = {
  state: 'success' | 'failure' | null;
  message: string;
};

export default function ContactBanner({ state, message }: ContactBannerProps) {
  return (
    <div className="mt-7 md:mt-12">
      <aside
        className={CommonUtils.combineClassName(
          'max-w-sm flex items-center px-2 py-1 md:p-3 rounded-lg',
          state === null ? 'opacity-0' : 'opacity-100',
          'transition-opacity',
          state === 'success' && 'bg-green-500',
          state === 'failure' && 'bg-red-500',
        )}
      >
        {state === 'success' && (
          <>
            <div className="text-sm md:text-lg text-neutral-50 mr-2 md:mr-3 mt-0.5">
              <FaCheck />
            </div>
            <span className="text-sm text-neutral-100">{message}</span>
          </>
        )}
        {state === 'failure' && (
          <>
            <div className="text-sm md:text-lg text-neutral-100 mr-3 mt-0.5">
              <PiWarningCircleFill />
            </div>
            <span className="text-sm text-neutral-100">{message}</span>
          </>
        )}
      </aside>
    </div>
  );
}
