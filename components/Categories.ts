export const categories = [
    { name: 'LED', link: 'LED' },
    { name: 'AC', link: 'SPLIT-AC' },
    { name: 'DEEP FREEZER', link: 'DEEP-FREEZER' },
    { name: 'WASHING MACHINE', link: 'WASHING-MACHINE' },
    { name: 'MICROWAVE OVEN', link: 'MICROWAVE-OVEN' },
    { name: 'REFRIGERATOR', link: 'REFRIGERATOR' },
    { name: 'Kitchen Appliances', link: 'Kitchen-Appliances' },
    { name: 'AUTOMATIC WASHING MACHINE', link: 'AUTOMATIC-WASHING-MACHINE' },
    { name: 'Home Appliances', link: 'Home-Appliances' },
    { name: 'Beauty & Care ', link: 'Beauty & Care' },
  ];

  export function getBaseUrl() {
    if (typeof window !== 'undefined') return '';
    const vc = process.env.NEXT_PUBLIC_VERCEL_URL;
    if (vc) return `https://${vc}`;
    return 'http://localhost:3000';
  }