"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeoByte = void 0;
exports.NeoByte = {
    currency: '€',
    labels: {
        inStock: {
            container: '#add_to_cart > button',
            text: ['Añadir al carrito'],
        },
        maxPrice: {
            container: '#our_price_display',
            euroFormat: true,
        },
        outOfStock: {
            container: '#availability_value',
            text: ['No Disponible'],
        },
    },
    links: [
        {
            brand: 'test:brand',
            model: 'test:model',
            series: 'test:series',
            url: 'https://www.neobyte.es/grafica-asus-gt1030-sl-2g-brk-1647.html',
        },
        // 3090
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3090',
            url: 'https://www.neobyte.es/gigabyte-rtx-3090-gaming-oc-24gb-7275.html',
        },
        {
            brand: 'gigabyte',
            model: 'vision oc',
            series: '3090',
            url: 'https://www.neobyte.es/gigabyte-rtx-3090-vision-oc-24g-7696.html',
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3090',
            url: 'https://www.neobyte.es/asus-tuf-rtx-3090-oc-gaming-24gb-7279.html',
        },
        {
            brand: 'asus',
            model: 'tuf',
            series: '3090',
            url: 'https://www.neobyte.es/asus-tuf-rtx-3090-gaming-24gb-7280.html',
        },
        {
            brand: 'msi',
            model: 'gaming x trio',
            series: '3090',
            url: 'https://www.neobyte.es/grafica-msi-rtx-3090-gaming-x-trio-24g-7287.html',
        },
        {
            brand: 'gigabyte',
            model: 'aorus xtreme',
            series: '3090',
            url: 'https://www.neobyte.es/tarjeta-grafica-gigabyte-aorus-rtx3090-24gb-8961.html',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3090',
            url: 'https://www.neobyte.es/tarjeta-grafica-gigabyte-rtx3090-aorus-master-24gb-9271.html',
        },
        {
            brand: 'asus',
            model: 'strix oc white',
            series: '3090',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-rog-strix-rtx3090-oc-24gb-white-edition-8114.html',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3090',
            url: 'https://www.neobyte.es/asus-rog-strix-rtx-3090-oc-gaming-24gb-7283.html',
        },
        {
            brand: 'asus',
            model: 'strix',
            series: '3090',
            url: 'https://www.neobyte.es/asus-rog-strix-rtx-3090-gaming-24gb-7284.html',
        },
        {
            brand: 'msi',
            model: 'ventus 3x oc',
            series: '3090',
            url: 'https://www.neobyte.es/grafica-msi-rtx-3090-ventus-3x-24g-oc-7288.html',
        },
        // 3080 Ti
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3080ti',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx3080ti-oc-12gb-9453.html',
        },
        {
            brand: 'asus',
            model: 'tuf',
            series: '3080ti',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx3080ti-12gb-9454.html',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3080ti',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-rtx3080ti-oc-12gb-9452.html',
        },
        {
            brand: 'asus',
            model: 'strix',
            series: '3080ti',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-rtx3080ti-12gb-9474.html',
        },
        {
            brand: 'asus',
            model: 'strix oc lc',
            series: '3080ti',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-lc-rtx3080ti-oc-12gb-9472.html',
        },
        {
            brand: 'asus',
            model: 'strix lc',
            series: '3080ti',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-lc-rtx3080ti-12gb-9473.html',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3080ti',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-gaming-oc-12gb-9462.html',
        },
        {
            brand: 'gigabyte',
            model: 'eagle',
            series: '3080ti',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-eagle-12gb-9467.html',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3080ti',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-aorus-master-12gb-9461.html',
        },
        {
            brand: 'gigabyte',
            model: 'vision oc',
            series: '3080ti',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-vision-oc-12gb-9464.html',
        },
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3080ti',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080ti-eagle-oc-12gb-9466.html',
        },
        // 3080
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3080',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080-eagle-oc-10gb-7278.html',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3080',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080-gaming-oc-10gb-7277.html',
        },
        {
            brand: 'gigabyte',
            model: 'vision oc',
            series: '3080',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080-vision-oc-10g-7440.html',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3080',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080-aorus-master-10gb-7483.html',
        },
        {
            brand: 'gigabyte',
            model: 'aorus xtreme',
            series: '3080',
            url: 'https://www.neobyte.es/gigabyte-rtx-3080-aorus-x-10gb-7840.html',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3080',
            url: 'https://www.neobyte.es/tarjeta-grafica-gigabyte-rtx3080-aorus-master-10gb-9305.html',
        },
        {
            brand: 'asus',
            model: 'strix oc white',
            series: '3080',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-rog-strix-rtx3080-oc-10gb-white-edition-8205.html',
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3080',
            url: 'https://www.neobyte.es/asus-tuf-rtx-3080-oc-gaming-10gb-7281.html',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3080',
            url: 'https://www.neobyte.es/asus-rog-strix-rtx-3080-oc-gaming-10gb-7285.html',
        },
        {
            brand: 'asus',
            model: 'tuf',
            series: '3080',
            url: 'https://www.neobyte.es/asus-tuf-rtx-3080-gaming-10gb-7282.html',
        },
        // 3070 Ti
        {
            brand: 'asus',
            model: 'strix',
            series: '3070ti',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-rtx3070ti-8gb-9471.html',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3070ti',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx3070ti-oc-8gb-9470.html',
        },
        {
            brand: 'gigabyte',
            model: 'eagle',
            series: '3070ti',
            url: 'https://www.neobyte.es/gigabyte-rtx-3070ti-eagle-8gb-9469.html',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3070ti',
            url: 'https://www.neobyte.es/gigabyte-rtx-3070ti-gaming-oc-8gb-9468.html',
        },
        // 3070
        {
            brand: 'gigabyte',
            model: 'vision oc',
            series: '3070',
            url: 'https://www.neobyte.es/gigabyte-rtx-3070-vision-oc-8gb-7788.html',
        },
        {
            brand: 'gigabyte',
            model: 'eagle oc',
            series: '3070',
            url: 'https://www.neobyte.es/gigabyte-rtx-3070-eagle-oc-8gb-7649.html',
        },
        {
            brand: 'gigabyte',
            model: 'eagle',
            series: '3070',
            url: 'https://www.neobyte.es/tarjeta-grafica-gigabyte-rtx3070-eagle-8gb-8779.html',
        },
        {
            brand: 'gigabyte',
            model: 'aorus master',
            series: '3070',
            url: 'https://www.neobyte.es/gigbyte-rtx-3070-aorus-master-8gb-7770.html',
        },
        {
            brand: 'gigabyte',
            model: 'gaming oc',
            series: '3070',
            url: 'https://www.neobyte.es/gigabyte-rtx-3070-gaming-oc-8gb-7484.html',
        },
        {
            brand: 'asus',
            model: 'strix oc',
            series: '3070',
            url: 'https://www.neobyte.es/asus-rog-strix-rtx-3070-oc-8gb-gaming-7291.html',
        },
        {
            brand: 'asus',
            model: 'dual oc',
            series: '3070',
            url: 'https://www.neobyte.es/asus-dual-rtx-3070-oc-8gb-7293.html',
        },
        {
            brand: 'asus',
            model: 'dual',
            series: '3070',
            url: 'https://www.neobyte.es/asus-dual-rtx-3070-8gb-7294.html',
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3070',
            url: 'https://www.neobyte.es/asus-tuf-rtx-3070-gaming-8gb-7822.html',
        },
        {
            brand: 'asus',
            model: 'strix',
            series: '3070',
            url: 'https://www.neobyte.es/asus-rog-strix-rtx-3070-8gb-gaming-7292.html',
        },
        {
            brand: 'asus',
            model: 'tuf',
            series: '3070',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx-3070-gaming-8gb-8049.html',
        },
        {
            brand: 'asus',
            model: 'strix oc white',
            series: '3070',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-strix-rtx3070-oc-8gb-blanca-8206.html',
        },
        {
            brand: 'asus',
            model: 'tuf oc',
            series: '3070',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-tuf-rtx3070-oc-gaming-8gb-7961.html',
        },
        {
            brand: 'asus',
            model: 'strix white',
            series: '3070',
            url: 'https://www.neobyte.es/tarjeta-grafica-asus-rog-strix-geforce-rtx-3070-white-edition-8523.html',
        },
    ],
    name: 'neobyte',
};
//# sourceMappingURL=neobyte.js.map