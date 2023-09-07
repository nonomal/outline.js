const DEFAULTS = [
  '<symbol id="outline-icon-up" viewBox="0 0 1024 1024"><path d="M494.784 261.696c0.832-0.448 1.536-1.216 2.368-1.536a38.72 38.72 0 0 1 46.08 8.256l277.824 302.272a41.92 41.92 0 0 1-1.536 58.048 39.104 39.104 0 0 1-56.448-1.6L513.728 355.904 260.736 626.048a39.104 39.104 0 0 1-56.448 1.088 41.6 41.6 0 0 1-1.088-57.984L483.84 269.696c0.512-0.512 1.344-0.768 1.92-1.408l1.088-1.344c2.368-2.496 5.312-3.648 8-5.248z"></path></symbol>',
  '<symbol id="outline-icon-down" viewBox="0 0 1024 1024"><path d="M494.784 762.304c0.832 0.448 1.536 1.216 2.368 1.536 15.232 7.488 33.92 4.992 46.08-8.256l277.824-302.272a41.92 41.92 0 0 0-1.536-58.048 39.104 39.104 0 0 0-56.448 1.6l-249.344 271.232-252.992-270.144a39.104 39.104 0 0 0-56.448-1.088 41.6 41.6 0 0 0-1.088 57.984l280.576 299.456c0.512 0.512 1.344 0.768 1.92 1.408l1.088 1.344c2.368 2.496 5.312 3.648 8 5.248z"></path></symbol>',
  '<symbol id="outline-icon-menu" viewBox="0 0 1024 1024"><path d="M320 256h640V128H320zM320 576h640V448H320zM320 896h640v-128H320zM64 256h128V128H64zM64 576h128V448H64zM64 896h128v-128H64z"></path></symbol>',
  '<symbol id="outline-icon-file" viewBox="0 0 1024 1024"><path d="M320 640h256v128H320z"></path><path d="M320 448h384v128H320z"></path><path d="M640 0l320 320v557.696C960 958.528 909.824 1024 848 1024H176C114.176 1024 64 958.528 64 877.696V146.304C64 65.472 114.176 0 176 0H640z m0 128H192v768h640V320h-192V128z"></path></symbol>',
  '<symbol id="outline-icon-hash" viewBox="0 0 24 24"><path d="M14.216 10l-0.444 4h-3.988l0.444-4zM15.006 2.89l-0.568 5.11h-3.988l0.543-4.89c0.061-0.549-0.335-1.043-0.883-1.104s-1.043 0.335-1.104 0.884l-0.568 5.11h-4.438c-0.552 0-1 0.448-1 1s0.448 1 1 1h4.216l-0.444 4h-3.772c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.549l-0.543 4.89c-0.061 0.549 0.335 1.043 0.883 1.104s1.043-0.335 1.104-0.883l0.569-5.111h3.988l-0.543 4.89c-0.061 0.549 0.335 1.043 0.883 1.104s1.043-0.335 1.104-0.883l0.568-5.111h4.438c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4.216l0.444-4h3.772c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.549l0.543-4.89c0.061-0.549-0.335-1.043-0.883-1.104s-1.043 0.335-1.104 0.883z"></path></symbol>',
  '<symbol id="outline-icon-close" viewBox="0 0 1024 1024"><path d="M536.96 491.648L310.592 265.344a32 32 0 1 0-45.248 45.248L491.584 536.96l-226.304 226.304a32 32 0 0 0 45.312 45.248l226.24-226.304 226.304 226.304a32 32 0 0 0 45.248-45.248L582.144 536.896l226.304-226.24a32 32 0 0 0-45.248-45.248L536.896 491.584z"></path></symbol>',
  '<symbol id="outline-icon-homepage" viewBox="0 0 26 28"><path d="M22 15.5v7.5c0 0.547-0.453 1-1 1h-6v-6h-4v6h-6c-0.547 0-1-0.453-1-1v-7.5c0-0.031 0.016-0.063 0.016-0.094l8.984-7.406 8.984 7.406c0.016 0.031 0.016 0.063 0.016 0.094zM25.484 14.422l-0.969 1.156c-0.078 0.094-0.203 0.156-0.328 0.172h-0.047c-0.125 0-0.234-0.031-0.328-0.109l-10.813-9.016-10.813 9.016c-0.109 0.078-0.234 0.125-0.375 0.109-0.125-0.016-0.25-0.078-0.328-0.172l-0.969-1.156c-0.172-0.203-0.141-0.531 0.063-0.703l11.234-9.359c0.656-0.547 1.719-0.547 2.375 0l3.813 3.187v-3.047c0-0.281 0.219-0.5 0.5-0.5h3c0.281 0 0.5 0.219 0.5 0.5v6.375l3.422 2.844c0.203 0.172 0.234 0.5 0.063 0.703z"></path></symbol>',
  '<symbol id="outline-icon-github" viewBox="0 0 24 28"><path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"></path></symbol>',
  '<symbol id="outline-icon-issues" viewBox="0 0 24 28"><path d="M25.5 15c0 0.547-0.453 1-1 1h-3.5c0 1.953-0.422 3.422-1.047 4.531l3.25 3.266c0.391 0.391 0.391 1.016 0 1.406-0.187 0.203-0.453 0.297-0.703 0.297s-0.516-0.094-0.703-0.297l-3.094-3.078s-2.047 1.875-4.703 1.875v-14h-2v14c-2.828 0-4.891-2.063-4.891-2.063l-2.859 3.234c-0.203 0.219-0.469 0.328-0.75 0.328-0.234 0-0.469-0.078-0.672-0.25-0.406-0.375-0.438-1-0.078-1.422l3.156-3.547c-0.547-1.078-0.906-2.469-0.906-4.281h-3.5c-0.547 0-1-0.453-1-1s0.453-1 1-1h3.5v-4.594l-2.703-2.703c-0.391-0.391-0.391-1.016 0-1.406s1.016-0.391 1.406 0l2.703 2.703h13.188l2.703-2.703c0.391-0.391 1.016-0.391 1.406 0s0.391 1.016 0 1.406l-2.703 2.703v4.594h3.5c0.547 0 1 0.453 1 1zM18 6h-10c0-2.766 2.234-5 5-5s5 2.234 5 5z"></path></symbol>',
  '<symbol id="outline-icon-tags" viewBox="0 0 26 28"><path d="M7 7c0-1.109-0.891-2-2-2s-2 0.891-2 2 0.891 2 2 2 2-0.891 2-2zM23.672 16c0 0.531-0.219 1.047-0.578 1.406l-7.672 7.688c-0.375 0.359-0.891 0.578-1.422 0.578s-1.047-0.219-1.406-0.578l-11.172-11.188c-0.797-0.781-1.422-2.297-1.422-3.406v-6.5c0-1.094 0.906-2 2-2h6.5c1.109 0 2.625 0.625 3.422 1.422l11.172 11.156c0.359 0.375 0.578 0.891 0.578 1.422zM29.672 16c0 0.531-0.219 1.047-0.578 1.406l-7.672 7.688c-0.375 0.359-0.891 0.578-1.422 0.578-0.812 0-1.219-0.375-1.75-0.922l7.344-7.344c0.359-0.359 0.578-0.875 0.578-1.406s-0.219-1.047-0.578-1.422l-11.172-11.156c-0.797-0.797-2.312-1.422-3.422-1.422h3.5c1.109 0 2.625 0.625 3.422 1.422l11.172 11.156c0.359 0.375 0.578 0.891 0.578 1.422z"></path></symbol>',
  '<symbol id="outline-icon-info" viewBox="0 0 1024 1024"><path d="M512 384.295982a95.994 95.994 0 0 1 95.994 95.994V928.006a95.994 95.994 0 0 1-191.988 0V480.289982a95.994 95.994 0 0 1 95.994-95.994z m0-128.375977A127.992 127.992 0 1 1 512 0.063996a127.992 127.992 0 0 1 0 255.984001z"></path></symbol>',
  '<symbol id="outline-icon-warning" viewBox="0 0 1024 1024"><path d="M512 639.704018a95.994 95.994 0 0 1-95.994-95.994V95.994a95.994 95.994 0 0 1 191.988 0v447.716018a95.994 95.994 0 0 1-95.994 95.994z m0 128.375977A127.992 127.992 0 1 1 512 1023.936004a127.992 127.992 0 0 1 0-255.984001z"></path></symbol>',
  '<symbol id="outline-icon-error" viewBox="0 0 1024 1024"><path d="M512.64 376.96L263.744 128 128 263.744l248.96 248.96L128 761.472l135.744 135.808 248.96-248.96 248.832 248.96 135.808-135.808-248.96-248.896 248.96-248.896L761.536 128 512.64 376.96z"></path></symbol>',
  '<symbol id="outline-icon-success" viewBox="0 0 1024 1024"><path d="M426.368 580.864l-226.56-226.56L64 489.984l362.048 362.112 0.32-0.32 0.32 0.32 588.288-588.352L879.36 128 426.304 580.864z"></path></symbol>',
  '<symbol id="outline-icon-circle-info" viewBox="0 0 1024 1024"><path d="M512 810.666667s-42.666667 4.266667-42.666667-42.666667v-341.333333c0-46.933333 42.666667-42.666667 42.666667-42.666667s42.666667-4.266667 42.666667 42.666667v341.333333c0 46.933333-42.666667 42.666667-42.666667 42.666667z m0 213.333333C228.949333 1024 0 795.050667 0 512S228.949333 0 512 0s512 228.949333 512 512-229.674667 512-512 512z m0-938.666667C276.608 85.333333 85.333333 276.608 85.333333 512s191.274667 426.666667 426.666667 426.666667 426.666667-191.274667 426.666667-426.666667S747.392 85.333333 512 85.333333z m0 213.333334c-23.466667 0-42.666667-19.2-42.666667-42.666667s19.2-42.666667 42.666667-42.666667 42.666667 19.2 42.666667 42.666667-19.2 42.666667-42.666667 42.666667z"></path></symbol>',
  '<symbol id="outline-icon-circle-warning" viewBox="0 0 1024 1024"><path d="M512 213.333333s-42.666667-4.266667-42.666667 42.666667v341.333333c0 46.933333 42.666667 42.666667 42.666667 42.666667s42.666667 4.266667 42.666667-42.666667V256c0-46.933333-42.666667-42.666667-42.666667-42.666667z m0-213.333333C228.949333 0 0 228.949333 0 512s228.949333 512 512 512 512-228.949333 512-512S794.325333 0 512 0z m0 938.666667C276.608 938.666667 85.333333 747.392 85.333333 512S276.608 85.333333 512 85.333333s426.666667 191.274667 426.666667 426.666667-191.274667 426.666667-426.666667 426.666667z m0-213.333334c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667 42.666667-19.2 42.666667-42.666667-19.2-42.666667-42.666667-42.666667z"></path></symbol>',
  '<symbol id="outline-icon-circle-error" viewBox="0 0 1024 1024"><path d="M512 0a512 512 0 1 0 512 512 512 512 0 0 0-512-512z m0 955.776A443.84 443.84 0 0 1 512 68.224a443.904 443.904 0 0 1 0 887.552z"></path><path d="M641.664 326.144a32 32 0 0 1 50.304 39.168l-3.52 4.48-306.112 328.064a32 32 0 0 1-50.304-39.168l3.52-4.48 306.112-328.064z"></path><path d="M324.608 337.088a32 32 0 0 1 40.704-5.12l4.48 3.584 328.064 306.112a32 32 0 0 1-39.168 50.304l-4.48-3.52-328.064-306.112a32 32 0 0 1-1.536-45.248z"></path></symbol>',
  '<symbol id="outline-icon-circle-success" viewBox="0 0 1024 1024"><path d="M512 0C228.949333 0 0 228.949333 0 512s228.949333 512 512 512 512-228.949333 512-512S794.325333 0 512 0z m0 950.869333C269.909333 950.869333 73.130667 754.090667 73.130667 512 73.130667 269.909333 269.909333 73.130667 512 73.130667c242.090667 0 438.869333 196.778667 438.869333 438.869333 0 242.090667-196.778667 438.869333-438.869333 438.869333z"></path><path d="M737.834667 353.834667a42.666667 42.666667 0 0 1 63.872 56.32l-3.541334 4.010666L486.997333 725.333333a85.333333 85.333333 0 0 1-115.242666 4.992L366.336 725.333333l-140.501333-140.501333a42.666667 42.666667 0 0 1 56.32-63.872l4.010666 3.541333L426.666667 665.002667l311.168-311.168z"></path></symbol>'
]

export default DEFAULTS
