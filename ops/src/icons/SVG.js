import React from "react";

const getViewBox = name => {
  switch (name) {
    case "guards":
      return "0 0 512 512";
    case "staff":
      return "0 0 512 512";
    case "contract":
      return "0 0 512 512";
    case "cctv":
      return "0 0 512.004 512.004";
    case "consultant":
      return "0 0 64 64";
    default:
      return "0 0 512 512";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "guards":
      return (
        <g data-name="Out line">
          <path
            {...props}
            d="M355.347 297.88L256 381.542l-99.347-83.66-10.306 12.238 104.5 88a8 8 0 0010.306 0l104.5-88zM112 64.888a235.98 235.98 0 00118.027-20.294L256 32.788l25.973 11.806A235.965 235.965 0 00400 64.888V96h16V56a8 8 0 00-8.992-7.938 220.04 220.04 0 01-118.414-18.035l-29.283-13.31a8.008 8.008 0 00-6.622 0l-29.283 13.31a220.028 220.028 0 01-118.414 18.035A8 8 0 0096 56v40h16z"
          ></path>
          <path
            {...props}
            d="M173.153 269.94l-10.306 12.239 88 74.105a8 8 0 0010.306 0l88-74.105-10.306-12.239L256 339.706zM384 152V89.736a8 8 0 00-7.89-7.999A250.452 250.452 0 01275.353 59.16l-16.041-7.292a8.008 8.008 0 00-6.622 0l-16.041 7.292a250.452 250.452 0 01-100.759 22.578 8 8 0 00-7.889 8V152h16V97.512a266.237 266.237 0 0099.269-23.786L256 67.938l12.731 5.788A266.237 266.237 0 00368 97.512V152z"
          ></path>
          <path
            {...props}
            d="M495.761 486.06l-7.893-31.575-23.478-172.167 29.857-37.32a8.004 8.004 0 001.445-7.196l-16-56a8 8 0 00-5.752-5.563L456 171.754v-8.44l5.657-5.657a8 8 0 001.498-9.235L456 134.112V128h8v-16h-56a8.001 8.001 0 00-7.692 5.802l-14.731 51.558-27.517 6.88a8 8 0 00-5.752 5.562l-16 56a8.002 8.002 0 002.035 7.855l37.194 37.194-23.405 171.634-7.893 31.575A8 8 0 00352 496h40a8 8 0 008-8v-30.796l22.896-74.412L440 456.91V488a8 8 0 008 8h40a8 8 0 007.761-9.94zM414.034 128H440v8a8 8 0 00.845 3.578l5.421 10.842-3.923 3.923A8 8 0 00440 160v8h-4.687l-5.656-5.657a8 8 0 00-11.314 11.314l8 8a8.003 8.003 0 004.139 2.197l-7.725 11.59-21.772-21.772zm-47.611 62.64l23.123-5.78L416 211.314V256h16v-45.578l14.656-21.985a7.988 7.988 0 001.034-2.269l17.887 4.473 13.596 47.587L464 257.193V232a8 8 0 00-16 0v40h-56v-40a8 8 0 00-16 0v28.687l-23.015-23.015zm24.56 97.36h58.034l21.818 160h-16.47L432 351.09V320h-16v30.796L386.091 448h-16.926zm-28.737 192l4-16H384v16zM456 480v-16h17.754l4 16zM159.868 454.485L136.463 282.85l37.194-37.194a8.002 8.002 0 002.035-7.855l-16-56a8 8 0 00-5.752-5.563l-27.517-6.88-14.73-51.557A8.001 8.001 0 00104 112H48v16h8v6.111l-7.155 14.31a8 8 0 001.498 9.236L56 163.313v8.441l-17.94 4.485a8 8 0 00-5.752 5.563l-16 56a8.004 8.004 0 001.445 7.196l29.857 37.32-23.478 172.167-7.893 31.575A8 8 0 0024 496h40a8 8 0 008-8v-31.09l17.104-74.118L112 457.204V488a8 8 0 008 8h40a8 8 0 007.761-9.94zM71.155 139.578A8 8 0 0072 136v-8h25.966l13.049 45.672-21.772 21.771-7.725-11.589a8.003 8.003 0 004.139-2.197l8-8a8 8 0 00-11.314-11.314L76.687 168H72v-8a8 8 0 00-2.343-5.657l-3.923-3.923zm-24.732 51.063l17.887-4.473a7.984 7.984 0 001.034 2.27L80 210.421V256h16v-44.686l26.454-26.454 23.123 5.78 13.438 47.032L136 260.687V232a8 8 0 00-16 0v40H64v-40a8 8 0 00-16 0v25.193l-15.173-18.965zM62.983 288h58.034l21.818 160h-16.926L96 350.796V320H80v31.09L57.636 448H41.165zM34.246 480l4-16H56v16zM128 480v-16h17.754l4 16z"
          ></path>
        </g>
      );
    case "staff":
      return (
        <g>
          <path
            {...props}
            d="M352.53 433.53c-4.121 0-7.889-2.62-9.347-6.468s-.346-8.334 2.753-11.048c3.189-2.792 7.921-3.249 11.591-1.138 3.672 2.113 5.63 6.451 4.803 10.603-.92 4.622-5.085 8.051-9.8 8.051z"
          ></path>
          <path
            {...props}
            d="M453.07 433.531h-55.517c-5.523 0-10-4.478-10-10 0-5.523 4.477-10 10-10h45.517V371.95H261.623v41.581h45.518c5.523 0 10 4.477 10 10 0 5.522-4.477 10-10 10h-55.518c-5.523 0-10-4.478-10-10V361.95c0-5.522 4.477-10 10-10H453.07c5.523 0 10 4.478 10 10v61.581c0 5.523-4.477 10-10 10zM420.149 330.276H251.623c-5.523 0-10-4.478-10-10s4.477-10 10-10h168.526c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10zM379.553 289.681h-127.93c-5.523 0-10-4.478-10-10s4.477-10 10-10h127.93c5.523 0 10 4.478 10 10s-4.477 10-10 10zM172.151 343.478h-7.697c7.981-9.607 12.786-21.954 12.786-35.405 0-30.551-24.791-55.405-55.264-55.405s-55.264 24.854-55.264 55.405c0 13.451 4.806 25.798 12.787 35.405h-7.697c-12.611 0-22.872 10.26-22.872 22.871v57.182c0 5.522 4.477 10 10 10h126.092c5.523 0 10-4.478 10-10V366.35c.001-12.612-10.26-22.872-22.871-22.872zm-85.439-35.405c0-19.522 15.819-35.405 35.264-35.405 19.444 0 35.264 15.883 35.264 35.405s-15.819 35.405-35.264 35.405c-19.444 0-35.264-15.882-35.264-35.405zm88.311 105.458H68.93V366.35a2.875 2.875 0 012.872-2.871h100.349a2.875 2.875 0 012.872 2.871z"
          ></path>
          <path
            {...props}
            d="M471.613 187.439h-21.386v-40.987c0-22.15-17.979-40.172-40.078-40.172h-95.495v-77.1c0-5.523-4.477-10-10-10h-97.307c-5.523 0-10 4.477-10 10v77.1h-95.495c-22.099 0-40.078 18.021-40.078 40.172v40.987H40.387C18.118 187.439 0 205.557 0 227.826v224.607c0 22.27 18.118 40.387 40.387 40.387h431.226c22.27 0 40.387-18.117 40.387-40.387V227.826c0-22.269-18.118-40.387-40.387-40.387zM217.347 39.18h77.307v107.679h-77.307zM81.773 146.451c0-11.123 9.007-20.172 20.078-20.172h95.495v20.579H159.24c-5.523 0-10 4.478-10 10 0 5.523 4.477 10 10 10h193.52c5.523 0 10-4.477 10-10 0-5.522-4.477-10-10-10h-38.106v-20.579h95.495c11.071 0 20.078 9.049 20.078 20.172v40.987H81.773zM492 452.434c0 11.241-9.146 20.387-20.387 20.387H40.387C29.146 472.82 20 463.675 20 452.434V227.826c0-11.242 9.146-20.388 20.387-20.388h431.226c11.242 0 20.387 9.145 20.387 20.388z"
          ></path>
        </g>
      );
    case "contract":
      return (
        <g>
          <path
            {...props}
            d="M334.954 137.804H89.765a7.532 7.532 0 100 15.064h245.19a7.532 7.532 0 10-.001-15.064zM89.765 100.621h122.594a7.532 7.532 0 100-15.064H89.765a7.532 7.532 0 00-7.532 7.532 7.531 7.531 0 007.532 7.532zM334.954 184.096H89.765a7.532 7.532 0 100 15.064h245.19a7.532 7.532 0 10-.001-15.064z"
          ></path>
          <path
            {...props}
            d="M145.618 459.668H67.151c-12.879 0-23.358-10.478-23.358-23.357V38.421c0-12.879 10.479-23.358 23.358-23.358h226.056c.73 0 1.449.067 2.16.163V62.2c0 21.186 17.236 38.421 38.421 38.421h46.973c.097.712.163 1.431.163 2.161v128.261a7.532 7.532 0 1015.064 0v-128.26c0-8.262-3.218-16.03-9.06-21.873l-71.85-71.85C309.236 3.218 301.469 0 293.207 0H67.151C45.965 0 28.73 17.236 28.73 38.421v397.89c0 21.185 17.236 38.42 38.421 38.42h78.467a7.532 7.532 0 100-15.063zm224.655-374.11h-36.484c-12.879 0-23.358-10.479-23.358-23.358V25.716z"
          ></path>
          <path
            {...props}
            d="M480.958 368.729l-63.818-107.72c-4.651-7.854-14.773-10.45-22.631-5.795l-15.523 9.197c-12.049 7.138-17.142 21.583-13.005 34.384a23.091 23.091 0 01-16.244-.176c-12.256-3.856-21.574-11.613-36.963-7.721-26.13 6.653-25.336 6.32-27.7 7.13-15.3-8.711-24.497-11.303-40.739-5.02l-14.478 5.597c-6.703 2.59-14.089 1.976-20.283-1.694l-3.951-2.329c1.928-11.552-3.195-23.743-14.043-30.169l-.001-.001-15.522-9.196c-7.836-4.641-17.988-2.043-22.63 5.793L89.607 368.73c-4.651 7.852-2.063 17.977 5.793 22.63l15.522 9.196a29.26 29.26 0 0014.959 4.106 29.648 29.648 0 0016.088-4.752l3.235 1.909-6.83 9.513c-8.139 11.338-5.553 27.104 5.787 35.244 5.244 3.764 11.832 5.483 18.645 4.413 1.081 6.319 4.543 12.233 10.149 16.259 5.265 3.78 11.823 5.501 18.648 4.426 1.084 6.314 4.544 12.223 10.147 16.246 7.53 5.405 16.892 6.03 24.693 2.698a25.105 25.105 0 008.813 11.41c10.808 7.757 25.696 5.734 34.094-4.316l18.15 10.752c12.003 7.113 27.49 3.16 34.607-8.857a25.21 25.21 0 003.362-9.861l.041.025c11.985 7.098 27.507 3.124 34.607-8.858a25.116 25.116 0 003.457-11.009c10.564 2.656 22.077-1.781 27.907-11.621a25.108 25.108 0 003.387-10.224c11.322 4.443 24.555.149 30.949-10.643 3.439-5.805 4.412-12.601 2.739-19.138a25.148 25.148 0 00-5.133-10.002l10.004-5.845c8.463 3.474 18.121 2.918 26.215-1.876l15.52-9.196c7.856-4.65 10.451-14.773 5.796-22.63zM118.6 387.597l-15.522-9.197a1.458 1.458 0 01-.511-1.993l63.82-107.723a1.457 1.457 0 011.994-.51l15.521 9.195c6.897 4.087 9.055 12.933 5.043 19.704l-50.641 85.48c-4.042 6.824-12.88 9.085-19.704 5.044zm34.345 46.742a10.186 10.186 0 01-2.334-14.222l10.039-13.984c3.198-4.455 9.571-5.674 14.222-2.335 4.565 3.277 5.612 9.656 2.336 14.221l-10.04 13.984c-3.277 4.567-9.66 5.611-14.223 2.336zm28.795 20.673c-4.565-3.278-5.612-9.659-2.335-14.223l10.039-13.983v-.001l.001-.001 11.079-15.432a10.122 10.122 0 016.627-4.113 10.124 10.124 0 017.595 1.778 10.123 10.123 0 014.112 6.626 10.122 10.122 0 01-1.778 7.595l-21.119 29.418a10.184 10.184 0 01-14.221 2.336zm28.795 20.671c-4.563-3.276-5.611-9.652-2.34-14.216l.004-.006 21.119-29.417c3.275-4.564 9.659-5.612 14.222-2.336 4.565 3.277 5.612 9.657 2.335 14.222l-9.383 13.071-.001.001-11.735 16.346c-3.277 4.565-9.655 5.614-14.221 2.335zm33.506 14.108c-4.562-3.276-5.611-9.649-2.342-14.214l7.029-9.79c3.276-4.566 9.659-5.61 14.222-2.335 4.564 3.276 5.612 9.657 2.335 14.222l-7.023 9.781c-3.276 4.566-9.658 5.614-14.221 2.336zm168.819-60.052c-2.866 4.837-9.13 6.441-13.968 3.576l-66.67-39.498a7.531 7.531 0 10-7.679 12.959l50.403 29.861.001.001a10.191 10.191 0 013.576 13.969c-2.867 4.839-9.134 6.44-13.97 3.577a2383777.49 2383777.49 0 01-50.43-29.877 7.531 7.531 0 10-7.679 12.959l37.138 22.002.008.005a10.191 10.191 0 013.569 13.965c-2.867 4.839-9.132 6.442-13.971 3.576l-19.931-11.807-.007-.004-.006-.003-14.545-8.618a7.53 7.53 0 00-10.319 2.64 7.531 7.531 0 002.64 10.319l14.548 8.619.006.004a10.19 10.19 0 013.576 13.968c-2.867 4.839-9.132 6.442-13.971 3.576l-16.971-10.053c7.275-11.226 4.508-26.354-6.473-34.236a25.106 25.106 0 00-10.489-4.374c3.896-10.417.537-22.579-8.922-29.369-5.6-4.022-12.305-5.411-18.633-4.419-1.126-6.585-4.727-12.353-10.16-16.252-10.218-7.333-24.104-5.924-32.681 2.753a25.1 25.1 0 00-7.193-7.992c-8.491-6.094-19.515-6.151-27.921-1.018l-3.451-2.037 47.37-79.959 2.255 1.33c9.96 5.9 22.114 7.13 33.378 2.774l14.478-5.597c8.285-3.202 12.854-3.411 21.049.456a33.716 33.716 0 00-8.545 22.457v33.395c0 8.87 7.211 16.091 16.074 16.097h.022c8.89 0 17.25-3.461 23.539-9.746 3.666-3.664 6.372-8.032 7.994-12.8 9.725 5.759 90.072 53.338 99.387 58.857a10.126 10.126 0 014.68 6.243 10.124 10.124 0 01-1.106 7.721zm54.628-51.339l-15.523 9.197c-6.824 4.04-15.662 1.777-19.702-5.043l-23.736-40.065a7.533 7.533 0 00-12.961 7.677l23.736 40.066c.447.754.932 1.471 1.434 2.17l-6.599 3.855a38.198 38.198 0 00-3.844 2.605L307.97 338.267c-5.013-2.967-11.369.65-11.369 6.48-.079.45.778 8.192-5.345 14.313a18.12 18.12 0 01-12.891 5.337h-.012a1.029 1.029 0 01-1.021-1.034v-33.395c0-8.724 6.002-16.084 14.119-18.139l25.016-6.331c9.077-2.294 14.208 2.553 27.799 7.153 9.435 3.65 19.694 3.425 28.8-.464l4.546 7.674a7.532 7.532 0 1012.961-7.677l-8.954-15.113c-4.051-6.838-1.794-15.65 5.043-19.703l15.522-9.195a1.454 1.454 0 011.995.511l63.818 107.721a1.452 1.452 0 01-.509 1.995z"
          ></path>
        </g>
      );
    case "cctv":
      return (
        <g>
          <path
            {...props}
            d="M506.625 235.884L217.344 70.434c-22.313-12.782-52.854-5.891-67.563 15.159L93.74 165.707a46.384 46.384 0 00-8.406 26.701c0 16.588 8.917 32.039 23.26 40.317l61.01 35.233-11.021 14.707c-5.969 7.955-9.25 17.818-9.25 27.765 0 10.229 3.746 19.851 9.78 27.805l-16.238 24.433H64v-32.105c0-5.901-4.771-10.561-10.667-10.561H10.667C4.771 320.002 0 324.662 0 330.563v106.763c0 5.901 4.771 10.676 10.667 10.676h42.667c5.896 0 10.667-4.775 10.667-10.676v-10.657h78.875c21.448 0 41.354-10.654 53.25-28.513l17.484-26.25c3.367.731 6.763 1.394 10.234 1.394 16.979 0 32.958-9.05 41.688-23.625l11.72-19.551 90.78 52.425a10.62 10.62 0 005.333 1.428c1.031 0 2.063-.146 3.073-.448a10.713 10.713 0 006.469-5.453l7.897-15.829c1.296.098 2.543.378 3.863.378 41.167 0 74.667-33.53 74.667-74.734 0-4.525-.668-9.188-1.661-13.955l38.432-19.231a10.69 10.69 0 005.896-9.258 10.687 10.687 0 00-5.376-9.563zM42.667 426.669H21.333v-85.333h21.333v85.333zm135.708-40.302a42.572 42.572 0 01-35.5 19H64v-21.333h78.875c7.167 0 13.802-3.552 17.75-9.5l14.771-22.164 18.318 10.988-15.339 23.009zm68.865-47.584c-7.458 12.406-25.01 16.823-37.427 9.354l-27.052-16.229c-7.458-4.469-12.094-12.656-12.094-21.354a25.12 25.12 0 014.979-14.948l12.564-16.751 70.56 40.711-11.53 19.217zm121.645 19.688L119.25 214.439c-7.76-4.479-12.583-12.833-12.583-21.802a25.076 25.076 0 014.552-14.448L138 139.939l263.967 152.284-33.082 66.248zm32.735-17.808l22.328-44.714 23.695-11.846c.119 1.309.357 2.664.357 3.93 0 27.025-20.283 49.18-46.38 52.63zm14.742-64.769l-266.078-153.5 16.977-24.246a30.042 30.042 0 0124.594-12.813 30.057 30.057 0 0114.906 3.958L478.74 244.71l-62.378 31.184z"
          ></path>
          <circle cx="352.002" cy="309.335" r="10.667"></circle>
        </g>
      );
    case "consultant":
      return (
        <g>
          <path
            {...props}
            d="M43.879 38.479a5.915 5.915 0 002.417.515 5.88 5.88 0 003.835-1.41l6.388-5.474c.68-.582 1.146-1.299 1.347-2.073.34-1.306.037-2.633-.83-3.642a4 4 0 00-5.639-.432l-4.188 3.589a11.054 11.054 0 00-9.941-6.547A7.976 7.976 0 0040 17c0-4.411-3.589-8-8-8s-8 3.589-8 8a7.975 7.975 0 002.731 6.004 11.052 11.052 0 00-9.94 6.547l-4.189-3.59A4.014 4.014 0 0010 25a3.994 3.994 0 00-3.034 1.395c-.868 1.01-1.171 2.337-.831 3.644.203.774.669 1.491 1.348 2.072l6.386 5.473c1.717 1.475 4.171 1.827 6.254.896 1.218-.544 2.24-1.567 2.878-2.856v4.991l-2.865 2.865 1.28 2.136-2.416.603v7.562l2.415.603-1.28 2.136 5.346 5.346 2.136-1.28.602 2.414h7.562l.603-2.415 2.136 1.28 5.346-5.346-1.28-2.136L45 53.781v-7.562l-2.415-.603 1.28-2.136L41 40.615v-4.992c.638 1.289 1.66 2.312 2.879 2.856zM31.596 37a38.41 38.41 0 01-1.308-2.585L31.686 25h.632l1.419 9.366c-.406.893-.854 1.77-1.332 2.634zM27.41 25h2.254l-.844 5.683A37.786 37.786 0 0127.41 25zm7.783 5.64L34.339 25h2.251a37.753 37.753 0 01-1.397 5.64zM26 17c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6zm-3 11v2.581c-.24.311-.448.643-.587 1.013L21.398 34.3c-.406 1.083-1.169 1.941-2.093 2.354a3.87 3.87 0 01-4.136-.589l-6.387-5.474c-.256-.22-.588-.581-.713-1.058a2 2 0 01.412-1.835c.691-.808 2.011-.907 2.819-.218l6.342 5.437.78-2.076c1.137-3.035 3.844-5.2 6.981-5.718A39.655 39.655 0 0029.321 37h-1.104l-.603 2.415-2.136-1.28-.478.48V28zm17.548 19.169l2.452.612v4.438l-1.949.486-.534.202-.465 1.143 1.296 2.159-3.139 3.139-2.159-1.296-1.219.496L34.219 61h-4.438l-.486-1.949-.202-.534-1.143-.465-2.159 1.296-3.139-3.139 1.296-2.159-.496-1.219L21 52.219v-4.438l1.949-.486.534-.202.465-1.143-1.296-2.159 3.139-3.139 2.159 1.296 1.219-.496.612-2.452h4.438l.486 1.949.202.534 1.143.465 2.159-1.296 3.139 3.139-1.296 2.159zm-2.028-9.034l-2.136 1.28L35.781 37h-1.104a39.655 39.655 0 003.918-11.877c3.137.517 5.845 2.683 6.982 5.718l.777 2.077 6.344-5.436c.808-.693 2.127-.592 2.82.217.434.504.584 1.173.411 1.834-.124.477-.456.838-.712 1.058l-6.389 5.475c-1.15.99-2.736 1.213-4.134.588-.925-.413-1.688-1.271-2.094-2.354l-1.015-2.704a3.962 3.962 0 00-.587-1.021V28h-2v10.615z"
          ></path>
          <path
            {...props}
            d="M52 23c6.065 0 11-4.935 11-11S58.065 1 52 1 41 5.935 41 12s4.935 11 11 11zm0-20c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9z"
          ></path>
          <path
            {...props}
            d="M51 15a1 1 0 01-1-1h-2c0 1.654 1.346 3 3 3v2h2v-2h3v-3c0-1.654-1.346-3-3-3h-2a1 1 0 01-1-1V9h3a1 1 0 011 1h2c0-1.654-1.346-3-3-3V5h-2v2h-3v3c0 1.654 1.346 3 3 3h2a1 1 0 011 1v1zM32 43c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7-3.141-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zM8.764 23A2.238 2.238 0 0011 20.764V19h7c1.654 0 3-1.346 3-3V8c0-1.654-1.346-3-3-3H4C2.346 5 1 6.346 1 8v8c0 1.654 1.346 3 3 3h1.382l1.383 2.765A2.224 2.224 0 008.764 23zM4 17a1 1 0 01-1-1V8a1 1 0 011-1h14a1 1 0 011 1v8a1 1 0 01-1 1H9v3.764c.001.22-.35.301-.447.105L6.618 17z"
          ></path>
          <path
            {...props}
            d="M5 9h12v2H5zM5 13h8v2H5zM15 13h2v2h-2zM60 45H50c-1.654 0-3 1.346-3 3v8c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3v-8c0-1.654-1.346-3-3-3zm1 11a1 1 0 01-1 1H50a1 1 0 01-1-1v-8a1 1 0 011-1h10a1 1 0 011 1z"
          ></path>
          <path
            {...props}
            d="M56 51.586l-2-2-3.707 3.707 1.414 1.414L54 52.414l2 2 3.707-3.707-1.414-1.414zM10.172 44h-.344A3.833 3.833 0 006 47.828V49h2v-1.172A1.83 1.83 0 019.828 46h.344a1.83 1.83 0 011.293 3.121L9 51.586V55h2v-2.586l1.879-1.879A3.802 3.802 0 0014 47.828 3.833 3.833 0 0010.172 44zM10 57c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2z"
          ></path>
        </g>
      );
    default:
      return <path />;
  }
};

const SVGIcon = ({
  name = "",
  style = {},
  fill = "#000",
  viewBox = "",
  width = "100%",
  className = ""
}) => (
  <svg
    width={width}
    style={style}
    // height={width}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { fill })}
  </svg>
);

export default SVGIcon;