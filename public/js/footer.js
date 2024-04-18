const footer = document.getElementById('footer');
const div = document.createElement('div');

div.classList.add('container');
div.innerHTML = `
<div class="d-flex flex-wrap justify-content-between align-items-center py-3 border-bottom">
    <div class="col-md-4 d-flex align-items-center">
        <span class="mb-3 mb-md-0 text-body-secondary">&copy; BADARANT 2024</span>
    </div>
    <ul class="nav col-md-4 list-unstyled d-flex justify-content-end">
        <li class="ms-3"><a class="text-body-secondary" href="https://twitter.com" target="_blank" title="Twitter X"><i class="bi bi-twitter-x social-icon"></i></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="https://www.instagram.com" target="_blank" title="Instagram"><i class="bi bi-instagram social-icon"></i></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="https://www.facebook.com" target="_blank" title="Facebook"><i class="bi bi-facebook social-icon"></i></a></li>
    </ul>
</div>
<div class="text-center">
    <div class="d-flex justify-content-center column-gap-5">
        <a href="https://www.riotgames.com/" target="_blank" title="Riot Games">
        <svg width="85" height="75" class="riot-games-icon" viewBox="0 0 587.93 165">
            <title>Riot Games</title>
            <path d="M98.77.33L0 46.07l24.61 93.66 18.73-2.3-5.15-58.89 6.15-2.74L54.96 136l32.01-3.93-5.69-65 6.09-2.71 11.68 66.23 32.38-3.98-6.23-71.25 6.16-2.74 12.77 72.43 32.01-3.93V19.71L98.77.33zm2.32 142.05l1.63 9.22 73.42 12.24v-30.68l-75.01 9.22h-.04zm144.49-19.22v12.63h15.57a14.84 14.84 0 01-1.92 7.31 13 13 0 01-5.6 5.11 20 20 0 01-8.9 1.8 17.53 17.53 0 01-10-2.8 17.87 17.87 0 01-6.44-8.14 33.06 33.06 0 01-2.27-12.93 31.81 31.81 0 012.32-12.81 18.14 18.14 0 016.5-8 17.27 17.27 0 019.82-2.78 19.31 19.31 0 015.36.71 14.15 14.15 0 014.33 2.09 12.92 12.92 0 013.18 3.29 15.61 15.61 0 012 4.44h17.27a27.22 27.22 0 00-3.46-10.28 28.84 28.84 0 00-7.05-8.1 32.6 32.6 0 00-9.91-5.29 37.91 37.91 0 00-12.06-1.86 37.32 37.32 0 00-14 2.6 32.6 32.6 0 00-11.36 7.61 35 35 0 00-7.61 12.21 46.15 46.15 0 00-2.73 16.44q0 11.94 4.54 20.59a32.4 32.4 0 0012.69 13.27 39.84 39.84 0 0035.84.84 28.39 28.39 0 0011.67-11q4.25-7.19 4.24-17.2v-9.76zm215.03 40.81V88.53h51.67v13.96h-34.62v16.76h27.99v13.96h-27.99v16.8h34.7v13.96h-51.75zm101.83-53.3a9 9 0 00-3.54-6.64c-2.09-1.59-5-2.38-8.69-2.38a16.63 16.63 0 00-6.26 1 8.62 8.62 0 00-3.83 2.78 6.74 6.74 0 00-1.33 4 6.2 6.2 0 00.79 3.29 7.27 7.27 0 002.4 2.45 16.54 16.54 0 003.7 1.79 40.14 40.14 0 004.64 1.31l6.63 1.54a47.19 47.19 0 019.45 3.08 27.46 27.46 0 017.2 4.68 18.84 18.84 0 014.58 6.39 20.37 20.37 0 011.61 8.29 20.65 20.65 0 01-3.54 12.11 22.56 22.56 0 01-10.15 7.85 41.31 41.31 0 01-15.93 2.76 42.69 42.69 0 01-16.17-2.81 23.22 23.22 0 01-10.72-8.48q-3.83-5.66-4-14.12h16.43a10.68 10.68 0 007.05 9.94 19.37 19.37 0 007.24 1.26 18.44 18.44 0 006.66-1.09 10 10 0 004.33-3 7.22 7.22 0 001.57-4.48 6.16 6.16 0 00-1.42-4 10.86 10.86 0 00-4.14-2.81 42.07 42.07 0 00-6.89-2.14l-8.07-1.95q-9.65-2.3-15.23-7.26t-5.54-13.44a19.86 19.86 0 013.72-12.12 24.74 24.74 0 0110.33-8.11 36.74 36.74 0 0115-2.91 35.62 35.62 0 0114.92 2.91 23.43 23.43 0 019.91 8.14 21.54 21.54 0 013.6 12.12zm-113.99 53.3h-16.87v-57.35l-1.73-.02-17.04 57.37h-16.86l-16.58-57.37-2.15.02v57.35h-16.87V88.53h28.67l14.48 50.56h1.75l14.48-50.56h28.72v75.44zm-114.66 0h18.27l-25.33-75.43h-23.15l-25.37 75.43h18.3l4.93-16.54h27.42zm-28.43-29.7l8.22-27.65h3.1l8.26 27.65zm278.58-37.76a4 4 0 01-3.67-2.44 4 4 0 010-3.1 4 4 0 01.85-1.27 4.25 4.25 0 011.27-.86 4.15 4.15 0 013.1 0 4.13 4.13 0 011.27.86 4.08 4.08 0 01.86 1.27 4 4 0 010 3.1 4.08 4.08 0 01-.86 1.27 4 4 0 01-1.27.86 4 4 0 01-1.55.31zm0-1.09a2.84 2.84 0 001.47-.39 2.94 2.94 0 001.05-1 2.93 2.93 0 000-2.92 3 3 0 00-1.06-1 2.93 2.93 0 00-2.92 0 3 3 0 00-1 1 2.86 2.86 0 000 2.92 3 3 0 001 1 2.83 2.83 0 001.46.39zm-1.46-1.15V90.6h1.78a1.52 1.52 0 01.69.15 1.13 1.13 0 01.47.42 1.24 1.24 0 01.17.66 1.16 1.16 0 01-.18.66 1 1 0 01-.48.41 1.56 1.56 0 01-.7.14h-1.2v-.72h1a.52.52 0 00.36-.12.5.5 0 00.14-.37.47.47 0 00-.14-.37.52.52 0 00-.36-.12h-.55v2.93zm2.39-1.68l.82 1.68h-1.11l-.75-1.68zM282.41 1.03h17.05v75.44h-17.05zm98.02 37.72q0 12.42-4.71 21a32.67 32.67 0 01-12.79 13.17 38.57 38.57 0 01-36.31 0 32.75 32.75 0 01-12.79-13.2q-4.71-8.66-4.71-21t4.71-21.05a32.67 32.67 0 0112.75-13.14 38.65 38.65 0 0136.31 0 32.67 32.67 0 0112.79 13.17q4.71 8.64 4.71 21.05m-17.35 0a33.35 33.35 0 00-2.23-13 17.47 17.47 0 00-6.33-8 18.57 18.57 0 00-19.45 0 17.57 17.57 0 00-6.35 8 38.59 38.59 0 000 26 17.49 17.49 0 006.35 8 18.57 18.57 0 0019.45 0 17.39 17.39 0 006.33-8 33.4 33.4 0 002.23-13M246.58 50.17l8.76 26.3h18.71l-9.74-28.33h-13.23l-.79-2.44c2.52-.49 6.83-1.25 10.65-3.85a20 20 0 008.75-16.39 24.15 24.15 0 00-3.26-12.75 21.9 21.9 0 00-9.36-8.64 32.56 32.56 0 00-14.64-3H212v75.4h17.06v-26.3zm-.32-15.61a19.35 19.35 0 01-7.26 1.18h-9.94V14.88h9.91a18.68 18.68 0 017.25 1.24 9.12 9.12 0 014.4 3.7 10 10 0 011.5 5.64 9.65 9.65 0 01-1.48 5.55 8.86 8.86 0 01-4.38 3.55M382.04 1.03v14h29.3l.8 2.45c-2.48.48-6.67 1.22-10.43 3.7v55.31h16.87v-61.5h19.62v-14z"></path>
        </svg>
        </a>
        <a href="https://playvalorant.com/" target="_blank" title="Valorant" >
        <svg width="70" height="70" class="valorant-icon" viewBox="0 0 1035 697" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="f000000ff"></g>
            <g id="ff4655ff">
                <path opacity="1.00" d=" M 245.44 4.65 C 248.61 2.76 250.63 6.58 252.34 8.59 C 362.37 146.24 472.53 283.79 582.55 421.44 C 584.81 423.40 583.10 427.59 580.05 427.14 C 527.37 427.20 474.68 427.16 422.00 427.16 C 417.78 427.21 413.74 425.11 411.15 421.82 C 356.49 353.53 301.86 285.21 247.20 216.91 C 244.88 214.15 243.68 210.58 243.83 206.99 C 243.83 141.01 243.85 75.02 243.81 9.04 C 243.84 7.48 243.78 5.46 245.44 4.65 Z" />
                <path opacity="1.00" d=" M 754.32 4.33 C 756.57 3.48 759.05 5.56 758.72 7.92 C 758.80 73.93 758.71 139.94 758.76 205.95 C 758.91 209.69 758.09 213.56 755.66 216.50 C 739.05 237.28 722.42 258.05 705.81 278.82 C 703.04 282.42 698.51 284.41 693.98 284.18 C 641.65 284.13 589.31 284.21 536.98 284.14 C 533.89 284.62 532.13 280.45 534.41 278.44 C 606.98 187.65 679.61 96.89 752.22 6.12 C 752.77 5.34 753.47 4.74 754.32 4.33 Z" />
                <path opacity="1.00" d=" M 392.51 540.68 C 408.39 538.24 425.06 541.05 439.18 548.77 C 452.87 556.18 464.12 568.01 470.81 582.08 C 478.23 597.51 479.96 615.55 475.77 632.15 C 471.79 648.22 462.16 662.80 449.02 672.87 C 426.55 690.57 393.62 693.18 368.60 679.35 C 354.20 671.62 342.52 658.99 335.93 644.03 C 327.63 625.45 327.52 603.42 335.61 584.74 C 345.36 561.58 367.62 544.27 392.51 540.68 M 396.52 565.68 C 380.58 568.09 366.56 579.41 360.31 594.20 C 353.85 608.92 355.12 626.77 363.73 640.36 C 370.79 651.81 382.83 660.15 396.15 662.29 C 409.69 664.67 424.11 660.48 434.43 651.44 C 446.20 641.37 452.57 625.49 451.24 610.07 C 450.24 596.31 443.18 583.11 432.17 574.76 C 422.19 567.04 408.99 563.63 396.52 565.68 Z" />
                <path opacity="1.00" d=" M 0.00 544.09 C 6.18 542.41 12.71 543.77 19.03 543.29 C 21.28 543.60 24.70 542.44 25.97 544.98 C 26.41 548.29 26.13 551.64 26.17 554.98 C 26.17 584.09 26.16 613.21 26.17 642.32 C 51.69 610.43 77.18 578.52 102.67 546.61 C 104.00 544.95 105.81 543.48 108.04 543.44 C 115.36 543.12 122.69 543.48 130.02 543.30 C 132.76 543.35 135.80 542.83 138.14 544.65 C 129.61 555.89 120.57 566.74 111.83 577.82 C 85.63 610.62 59.42 643.41 33.21 676.20 C 31.26 678.58 29.55 681.20 27.22 683.26 C 24.93 685.15 21.74 684.56 19.00 684.71 C 12.67 684.49 6.30 685.05 0.00 684.27 L 0.00 544.09 Z" />
                <path opacity="1.00" d=" M 177.20 549.17 C 179.92 545.48 184.38 543.24 188.97 543.34 C 194.63 543.35 200.30 543.24 205.96 543.39 C 207.91 543.18 209.00 545.20 208.75 546.92 C 208.75 591.62 208.75 636.33 208.75 681.03 C 209.01 682.75 207.96 684.85 205.96 684.63 C 198.95 684.71 191.94 684.71 184.93 684.62 C 182.36 684.69 180.33 682.88 178.89 680.95 C 166.77 665.73 154.59 650.56 142.47 635.34 C 130.13 650.71 117.86 666.13 105.55 681.53 C 104.23 683.22 102.32 684.64 100.08 684.61 C 92.05 684.79 84.01 684.57 75.97 684.70 C 74.00 684.57 71.53 685.20 70.31 683.15 C 105.73 638.33 141.63 593.87 177.20 549.17 M 157.23 614.01 C 165.55 624.36 173.75 634.80 182.13 645.09 C 182.19 624.34 182.17 603.60 182.15 582.85 C 173.82 593.22 165.52 603.61 157.23 614.01 Z" />
                <path opacity="1.00" d=" M 240.50 546.89 C 240.31 545.31 241.17 543.37 243.00 543.41 C 250.05 543.24 257.13 543.31 264.19 543.38 C 266.21 543.16 267.47 545.16 267.15 547.01 C 267.19 584.47 267.17 621.93 267.16 659.40 C 286.76 659.47 306.36 659.35 325.95 659.45 C 327.63 659.09 328.68 661.22 327.35 662.35 C 322.25 668.92 316.98 675.37 311.79 681.89 C 310.22 684.01 307.56 684.87 305.00 684.68 C 284.34 684.61 263.67 684.76 243.01 684.61 C 241.11 684.69 240.32 682.63 240.50 681.04 C 240.50 636.33 240.49 591.61 240.50 546.89 Z" />
                <path opacity="1.00" d=" M 501.67 546.94 C 501.21 544.88 502.87 543.01 504.96 543.35 C 540.68 543.31 576.39 543.33 612.10 543.34 C 613.75 543.11 615.70 544.14 615.54 546.02 C 615.65 555.70 615.56 565.39 615.58 575.07 C 615.79 577.38 614.57 579.41 613.15 581.11 C 602.84 593.86 592.70 606.74 582.36 619.47 C 581.85 620.37 580.15 621.56 581.44 622.60 C 597.06 642.24 612.81 661.79 628.41 681.44 C 629.54 682.38 629.56 684.62 627.71 684.57 C 618.45 684.77 609.18 684.67 599.92 684.62 C 596.29 684.67 594.24 681.30 592.23 678.82 C 577.89 660.83 563.54 642.85 549.15 624.91 C 548.08 623.59 546.44 621.68 547.93 620.05 C 561.48 602.85 575.28 585.83 588.90 568.67 C 568.73 568.58 548.55 568.84 528.39 568.54 C 528.03 606.34 528.41 644.16 528.20 681.96 C 528.43 683.72 526.61 684.89 525.03 684.65 C 518.03 684.65 511.03 684.76 504.03 684.60 C 502.17 684.62 501.42 682.53 501.66 680.98 C 501.67 636.30 501.66 591.62 501.67 546.94 Z" />
                <path opacity="1.00" d=" M 651.16 547.01 C 650.84 545.21 652.01 543.15 654.03 543.38 C 660.70 543.26 667.39 543.33 674.07 543.35 C 676.57 543.20 678.99 544.37 680.46 546.40 C 713.79 588.10 747.11 629.81 780.44 671.51 C 783.31 675.36 786.75 678.82 789.24 682.95 C 789.00 683.34 788.52 684.12 788.28 684.51 C 780.20 684.92 772.09 684.51 764.00 684.69 C 760.81 684.74 756.95 685.01 754.84 682.09 C 742.32 666.56 729.92 650.93 717.46 635.35 C 705.12 650.71 692.84 666.13 680.54 681.52 C 679.22 683.23 677.29 684.63 675.05 684.62 C 668.07 684.72 661.09 684.69 654.12 684.64 C 652.04 684.93 650.83 682.83 651.16 681.00 C 651.16 636.34 651.17 591.67 651.16 547.01 M 677.77 582.92 C 677.74 603.66 677.74 624.39 677.77 645.13 C 686.09 634.77 694.37 624.38 702.66 614.00 C 694.35 603.65 686.13 593.22 677.77 582.92 Z" />
                <path opacity="1.00" d=" M 768.68 547.05 C 768.47 545.50 769.16 543.48 770.99 543.44 C 777.64 543.17 784.30 543.40 790.95 543.33 C 793.53 543.16 796.23 544.01 797.80 546.17 C 823.45 578.19 849.00 610.29 874.67 642.29 C 874.67 610.52 874.66 578.75 874.67 546.97 C 874.24 544.97 875.80 543.03 877.89 543.35 C 884.93 543.36 891.97 543.19 899.00 543.44 C 900.80 543.51 901.45 545.51 901.25 547.05 C 901.25 591.69 901.25 636.33 901.25 680.97 C 901.46 682.49 900.79 684.55 898.97 684.58 C 891.98 684.78 884.97 684.64 877.98 684.65 C 875.67 684.74 873.48 683.63 872.12 681.80 C 846.50 649.81 820.97 617.74 795.33 585.77 C 795.30 604.52 795.38 623.28 795.30 642.03 C 795.79 643.70 793.41 645.13 792.40 643.61 C 785.04 634.68 777.93 625.54 770.67 616.53 C 769.05 614.76 768.53 612.38 768.65 610.05 C 768.69 589.05 768.64 568.05 768.68 547.05 Z" />
                <path opacity="1.00" d=" M 919.64 546.01 C 919.43 544.19 921.37 543.14 922.96 543.35 C 952.32 543.30 981.68 543.35 1011.04 543.33 C 1013.58 543.17 1016.24 544.00 1017.79 546.14 C 1022.99 552.62 1028.24 559.08 1033.35 565.64 C 1034.70 566.74 1033.69 568.92 1031.99 568.62 C 1016.64 568.74 1001.28 568.62 985.92 568.67 C 985.85 606.11 986.01 643.55 986.00 680.99 C 986.36 682.78 985.13 684.84 983.13 684.63 C 976.12 684.69 969.10 684.72 962.10 684.62 C 960.61 684.75 959.31 683.43 959.46 681.96 C 959.21 644.20 959.45 606.43 959.25 568.67 C 947.14 568.64 935.02 568.71 922.92 568.65 C 921.31 568.84 919.39 567.73 919.64 565.91 C 919.54 559.28 919.53 552.64 919.64 546.01 Z" />
            </g>
        </svg>
        </a>
    </div>
    <p class="text-body-secondary">© 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT e todos os logotipos associados são marcas comerciais, marcas de serviço e/ou marcas registradas da Riot Games, Inc.</p>
    <br>
</div>`
footer.appendChild(div);