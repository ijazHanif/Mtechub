import React from 'react';

const InputCountryCode = () => {
  return (
    <div>
      <form className="max-w-sm mx-auto">
        <div className="flex items-center">
          <button
            id="dropdown-phone-button"
            data-dropdown-toggle="dropdown-phone"
            className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button">
            <svg
              fill="none"
              aria-hidden="true"
              className="h-4 w-4 me-2"
              viewBox="0 0 20 15">
              <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
              <mask
                id="a"
                style={{ maskType: 'luminance' }}
                width="20"
                height="15"
                x="0"
                y="0"
                maskUnits="userSpaceOnUse"
              >
                <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
              </mask>
              <g mask="url(#a)">
                <path
                  fill="#D02F44"
                  fillRule="evenodd"
                  d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                  clipRule="evenodd"
                />
                <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                <g filter="url(#filter0_d_343_121520)">
                  <path
                    fill="url(#paint0_linear_343_121520)"
                    fillRule="evenodd"
                    d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                    clipRule="evenodd"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_343_121520"
                  x1=".933"
                  x2=".933"
                  y1="1.433"
                  y2="6.1"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#fff" />
                  <stop offset="1" stopColor="#F0F0F0" />
                </linearGradient>
                <filter
                  id="filter0_d_343_121520"
                  width="6.533"
                  height="5.667"
                  x=".933"
                  y="1.433"
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="1" />
                  <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                  <feBlend
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_343_121520"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_343_121520"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            +1
            <svg
              className="w-2.5 h-2.5 ms-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown-phone"
            className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-52 dark:bg-gray-700"
          >
            <ul
              className="py-2 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdown-phone-button"
            >
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <svg
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 me-2"
                      viewBox="0 0 20 15"
                    >
                      <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                      <mask
                        id="a"
                        style={{ maskType: 'luminance' }}
                        width="20"
                        height="15"
                        x="0"
                        y="0"
                        maskUnits="userSpaceOnUse"
                      >
                        <rect width="19.6" height="14" y=".5" fill="#fff" rx="2" />
                      </mask>
                      <g mask="url(#a)">
                        <path
                          fill="#D02F44"
                          fillRule="evenodd"
                          d="M19.6.5H0v.933h19.6V.5zm0 1.867H0V3.3h19.6v-.933zM0 4.233h19.6v.934H0v-.934zM19.6 6.1H0v.933h19.6V6.1zM0 7.967h19.6V8.9H0v-.933zm19.6 1.866H0v.934h19.6v-.934zM0 11.7h19.6v.933H0V11.7zm19.6 1.867H0v.933h19.6v-.933z"
                          clipRule="evenodd"
                        />
                        <path fill="#46467F" d="M0 .5h8.4v6.533H0z" />
                        <g filter="url(#filter0_d_343_121520)">
                          <path
                            fill="url(#paint0_linear_343_121520)"
                            fillRule="evenodd"
                            d="M1.867 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.866 0a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM7.467 1.9a.467.467 0 11-.934 0 .467.467 0 01.934 0zM2.333 3.3a.467.467 0 100-.933.467.467 0 000 .933zm2.334-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm1.4.467a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.934 0 .467.467 0 01.934 0zm-2.334.466a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.466a.467.467 0 11-.933 0 .467.467 0 01.933 0zM1.4 4.233a.467.467 0 100-.933.467.467 0 000 .933zm1.4.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zm1.4.467a.467.467 0 100-.934.467.467 0 000 .934zM6.533 4.7a.467.467 0 11-.933 0 .467.467 0 01.933 0zM7 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.933 0 .467.467 0 01.933 0zM3.267 6.1a.467.467 0 100-.933.467.467 0 000 .933zm-1.4-.467a.467.467 0 11-.934 0 .467.467 0 01.934 0z"
                            clipRule="evenodd"
                          />
                        </g>
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_343_121520"
                          x1=".933"
                          x2=".933"
                          y1="1.433"
                          y2="6.1"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#fff" />
                          <stop offset="1" stopColor="#F0F0F0" />
                        </linearGradient>
                        <filter
                          id="filter0_d_343_121520"
                          width="6.533"
                          height="5.667"
                          x=".933"
                          y="1.433"
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                        >
                          <feFlood floodOpacity="0" result="BackgroundImageFix" />
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="1" />
                          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" />
                          <feBlend
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_343_121520"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow_343_121520"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <span className="sr-only">United States</span>
                    United States
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <svg
                      className="h-4 w-4 me-2"
                      aria-hidden="true"
                      viewBox="0 0 20 15"
                    >
                      <rect width="20" height="15" fill="#012169" />
                      <path
                        fill="#FFF"
                        d="M-1 1l3-2m0 0l3 2m-3-2v4.5M21 1l-3-2m0 0l-3 2m3-2v4.5M0 14l3-2m0 0l3 2m-3-2V9.5M20 14l-3-2m0 0l-3 2m3-2V9.5"
                      />
                      <path
                        fill="#C8102E"
                        d="M-1 1.5L4.5 0m0 0L10 1.5M-1 2.5L4.5 4m0 0L10 2.5M11 1.5L16.5 0m0 0L22 1.5M11 2.5L16.5 4m0 0L22 2.5M0 14.5L4.5 12m0 0L9 14.5M0 12.5L4.5 10m0 0L9 12.5M10 14.5l4.5-2.5m0 0L19 14.5M10 12.5l4.5-2.5m0 0L19 12.5"
                      />
                      <path fill="#FFF" d="M0 6.5h22v2.5H0z" />
                      <path fill="#C8102E" d="M0 6.5h22v1.5H0z" />
                      <path fill="#FFF" d="M8.5 0h4v15h-4z" />
                      <path fill="#C8102E" d="M9.5 0h2v15h-2z" />
                    </svg>
                    <span className="sr-only">United Kingdom</span>
                    United Kingdom
                  </div>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  role="menuitem"
                >
                  <div className="inline-flex items-center">
                    <svg
                      fill="none"
                      aria-hidden="true"
                      className="h-4 w-4 me-2"
                      viewBox="0 0 20 15"
                    >
                      <g clipPath="url(#clip0_343_120779)">
                        <rect width="20" height="15" fill="#F7FCFF" />
                        <mask
                          id="a"
                          style={{ maskType: 'alpha' }}
                          width="20"
                          height="15"
                          x="0"
                          y="0"
                          maskUnits="userSpaceOnUse"
                        >
                          <rect width="20" height="15" fill="#fff" />
                        </mask>
                        <g mask="url(#a)">
                          <path
                            fill="#E31D1C"
                            d="M9 0h2v15H9V0zm11 6v3H0V6h20z"
                          />
                          <path
                            fill="#273375"
                            d="M7 0v15H4V0h3zm9 0v15h-3V0h3zM20 5H0v5h20V5z"
                          />
                          <path
                            fill="#F7FCFF"
                            d="M12 9h1.5v6H12V9zM6.5 0H5v6h1.5V0zM12 9H5V7.5h7V9zm1.5-9H12v6h1.5V0zM7 15h1.5V9H7v6zM4 7.5V9h12V7.5H4z"
                          />
                          <path
                            fill="#E31D1C"
                            d="M7 9H5v6h2V9zm9 6v-6h-2v6h2zM6.5 0h-1v6h1V0zM14.5 0h-1v6h1V0z"
                          />
                          <path
                            fill="#F7FCFF"
                            d="M15.43 5.656a.819.819 0 00.17-.866c.281-.297.35-.693.196-1.02.248-.344.237-.773-.017-1.072.2-.437.129-.93-.193-1.235.146-.334.104-.724-.108-1.005.036-.432-.176-.85-.543-1.082a.824.824 0 00-.648-.03C14.328.14 14.002 0 13.656 0c-.35 0-.674.135-.918.364A.821.821 0 0012 0a.82.82 0 00-.738.525 1.196 1.196 0 00-.913-.033c-.425.234-.65.687-.561 1.133-.35.37-.429.902-.198 1.34a1.095 1.095 0 00-.176 1.05 1.072 1.072 0 00.474.54c-.158.374-.105.819.15 1.14-.088.28-.059.587.084.836a.86.86 0 00-.17.868c-.279.296-.35.692-.196 1.019-.248.344-.238.774.016 1.073-.199.436-.13.93.192 1.235-.146.334-.104.724.108 1.005-.036.432.176.85.543 1.082.366.232.835.222 1.204-.024.321.253.757.332 1.148.21.203.278.55.455.94.455.354 0 .68-.135.924-.364.244.23.57.364.924.364.347 0 .672-.139.918-.368a.827.827 0 00.645.034c.425-.234.65-.687.561-1.133.35-.37.429-.902.198-1.34a1.095 1.095 0 00.176-1.05 1.073 1.073 0 00-.474-.54c.159-.374.106-.82-.15-1.141.089-.28.059-.587-.084-.836zM11.682 4.875c0-.592.476-1.078 1.063-1.078.587 0 1.062.486 1.062 1.078s-.475 1.078-1.062 1.078c-.587 0-1.063-.486-1.063-1.078zM11.682 9.523c0-.592.476-1.078 1.063-1.078.587 0 1.062.486 1.062 1.078s-.475 1.078-1.062 1.078c-.587 0-1.063-.486-1.063-1.078zm4.248 1.064c-.587 0-1.063-.486-1.063-1.078s.476-1.078 1.063-1.078c.587 0 1.062.486 1.062 1.078s-.475 1.078-1.062 1.078zM16.993 6.375c-.587 0-1.062-.486-1.062-1.078s.475-1.078 1.062-1.078c.587 0 1.062.486 1.062 1.078s-.475 1.078-1.062 1.078z"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_343_120779">
                            <rect width="20" height="15" fill="#fff" />
                          </clipPath>
                        </defs>
                      </g>
                    </svg>
                    <span className="sr-only">France</span>
                    France
                  </div>
                </button>
              </li>
            </ul>
          </div>
        
        </div>
      </form>
    </div>
  );
}

export default InputCountryCode;
