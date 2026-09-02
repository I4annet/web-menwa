import fs from 'fs';
import path from 'path';
import https from 'https';

const assets = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDkOJekITY3iFZBuIieCTLl6i0tt8Wm22KqvaTaCe3i7x-jSyWFv2YTaiJ75JU9BWOX6Vc-2z_C424JKl07UjZsvR_i1wDWillKAvWtGDo_IBXI2pPLvpPtE9M2V68V86hf7j4cRBJvp0Oq_f1LL9j5m2J3KktpNwRgyxJW8VwhGNTxNraKVDhfRJHPuInHLMFWkPJy-EK6Bpm8w_0PQF-gPDWA53LFeegtSWi6MNP2oYpkTYfn03-B',
    dest: 'public/images/home/hero-bg.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCno1sbxQ71DE4eZ73dzNQ6_d2arCQLkAtS4gaDy7i6Xny0zRit2p-PelDJGjAIvot9hLlNAlMTK9ml9--s-9XvzEAMMXbkWMV0tuac6JkaReWPX26Tt25JzDrCHcUotyUz_NAaGudFE_YeJGNIekgyLbD_1lAxr2gGmN-0FK3_EpnqLGiWXLdFKrUDnAjsR4z_nXE0eo0ViL8HUWkphXGos2kXIrLLFCouwwQwydhgxNWIH95KLpAi',
    dest: 'public/images/home/history.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCe_57GxGm1k6qRYmpOs90Q15wehPEE_Jn4oG9tGdZcA0bhbt42XtbuKL7SjggQO6igD90ZVrmx1DuEaMG5CuqQndViwoHLklb3NNNWD9WuGHoyyddP0U-ET4wdAz45FHd-KhIvypgprdrc4pw6iLOjTip-T0ab_1zwT74EbuMNhB69DOohn1_yw_xc9dnqG-uqtOYQdFJ95-Xgq46JhJNraP9GBXcrJgj51Koi1z47a0diHdGfgBZj',
    dest: 'public/images/members/komandan.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWLoqr0qecsm542N9ZNrvxpmtpOPZBB6rzpwym9EnMOf0879MyyMwkQCX2bSq9gqy2b6ED3x99LyCVkqHo6w6KftY5D8ViLi1yLglkjctSi2aucFav0RXJxa01-GJC96A-aMfCbMwmSxNlkN3gUEmKmslVD3Nt4mlVxysaCWCjgkKn0LaaWcEw5AVbhR5bRHaVxkKiJeSf6NpFXzagpC337YYZJdpvHdE1GD60xtisSlNy0lR4Xq8f',
    dest: 'public/images/members/sekretaris.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZpxpqpzDY-dhkuBWXUTIktzEggg5ppp5NW9OiYfwUN70y5uCojS33q8G87LmW5a3J-vwS4feG4_HmCEIL4u-iy-hVPpKTrWfqg7mcb_hEl7p6qrjCJUUM2wc3CdCv2pkRp-0PzuqRvhLErx13TLZZ21-thR_cMjYlg7Mv0VfFlvS6fSTcm5dkeNlVWIXv9oTA3yfFtk77Z3CoAlK5SI5cH2rewcLHUedyMOpRkTCfguV98Eqc09lg',
    dest: 'public/images/members/bendahara.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaytQFq3iz2DRMZBs1Cky0-bYj0Akuv4ldoMdQK7Tr2LR0WR-nCKOThNnVV2AP1o6xiQYFEavyU45AMoNAkdQbli0Oj0Lku-MfYGs9TjB3uZPbPW0SqRE1LltuvJ4OU1H5M4exbg9xyI-1EZU7w2zLEetWwyRTY8WRPVfp8idtUkOTYI1fVj26tSQl1TKIwGIlP-u_69nHKIww7xhj1aAAmUE9iy1ssziu9e99Z2ZsvK7i8vW6uqcO',
    dest: 'public/images/members/kaur-konsolidasi.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3tGpf4cS7l8VQppiPmRdVwjd1krX_JJ5OumXulU080BS9vP0oCjfqPJOxErVNkRnK9mPz9OzG2Gm7SbEr_SBOPJVPtmASKsRscCvvYAN5YQwPrz3E50paHnrb9NAjqRwwqf8BlhGKhSZ9UJerP8AD43a-halwDpdyu2LTGm_Q746plHe1U9-BhyOpg-2ZaVUiFF8-kMHLEo5Xu2HXYXum_0sRxg3o6DNlmPTQEwE65o6KrnYdN1cl',
    dest: 'public/images/members/kaur-operasional.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfcdn5D2Zg0FWdPoPCWamHBVuXVHV-Iokpt71cWZ39__ov2PX0qK9HPes9ruC4dLQviYk32Y6d9F7I70TtsA3hUhALI7gxn8LN1Ivd-t52lJy-nDZLKyKr65SVEDJpDAFpS9OAg1kvVsgb7bYnH9syXmZ5YHLZqDcaeM0Z1Azzz4DaopWK6H751VN-L13ldFf-77B5-1mXhjurnZTZs0vtQ-ibfjhvSN8W1NFzct0fWvH_arjs7t2K',
    dest: 'public/images/members/budi-santoso-profile.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ8QoKIbmw8PpjWOTtsR6s9wnZ1pkfoW51An2ednLKO4sv5XHDKRAY9Oo__ZN_KTdeH4SYzOHrAOfBdD5kdX7cg7ogD7LaICjwjqJArf2NaP0tmPb6dkncttiRTL5JgrK0bkRwdaKX1ZNe9Oiv8oidBrni2jFTIPFp75LvKh9dPuKdVY0m0y2ifze-atIvbwNUm62t2PXlsdE_4pkMSjG5XJ8qpnfv5Gaw-cP0G_CcVUKRQGsDhS1k',
    dest: 'public/images/activities/expo-kelembagaan.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHYcbnWgRXftw_dio6wbYcHQfkrBWtQTOHFUqQc4kRepjBnwqce4ltmB9UVgHxsOqzCjz_iHcnR7b4wLegrBG64zD7PHCMp5FxM6tvbQ8w5LtA5454zlP99Vk2hHYJnGDiqeEzeF-bHmNB8wndOacJEIXAH7PW7Dya4PPdYMtbxjF09fr8auQJH0PW8irtuW2zB3WcZJgSxI4N9xGCpvtncoqf5LIiYWJXc9rlV9KTKgEMi4iSSN-7',
    dest: 'public/images/activities/open-recruitment.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA_jf2Jwd6Mrr-5IhWdqFYk9chLN2QqP4KSv5yhu37ceoVPSlwlx5sIG4RL90C2_zvEaF1NAhMwEI74daZATufd8Tf-oe44Zpr3eDi9ISUrK1FvilQty1zdhmZJyJoL5nXDp7tdldrXcXH0g4uQH_50RP7pky5k6nw-RNrUPbbOWQcatp-UJCSLf5XAP6wzTR7q6tyFYoX5lT0RRTQfz8145_w3NHwMxv-DxmRkyktSvREJivtNosF2',
    dest: 'public/images/activities/pam-wisuda.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAso9GJRVNg2nkj21SwQpr1r5dMZ86hCdVh3mKtg43UaCAm3zrqezUoAGR6gYRElsf7f7oxRyx-WiIEVQ6t4ROKvcbJlO8_tfxf3cQ40i1s-hbPm6rkPGwuWAg1FOkV8Fk9Qs7UKDTnvflzc1NXguXoX2vBqLze3csJLfTjWc6iu6YoHoRdk1GKWQgMT_oXG6eVqfAHoHBnL6KbgFk8AUpIOwS97b-IyZsnGiMxcGTY1ikgwVOYuANt',
    dest: 'public/images/activities/pam-upacara.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuXObu3Zqmd0jFJUmKZ-3JjkfcdWHNUh2VOit1pF-6QJ445hN_0753U7anj1N3fLNcR5ezjiYa8j9PhRm11oyup0fBNmXN3U0h-a9nWYV_m0F5-Xnfwe50ggcVK4vA1hclhj7vkxlJiS2-774IYKOZJNrMWdH34xgZRdb65oWTDte7pj6Nm8v15n7RmexBgfesX6WMZfCOhLGd3ZQHDeJ_-pLtGCe5DP1_YnB2MaMStQ2VkPS2qWGL',
    dest: 'public/images/activities/pradiksar.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCB9X78kmoznimDkOd4swfcqZaWbdFLwhjqC46sQz-e9KlVZIz1xlw8PTAbRfIRammLYUFNdoMv2cjOg0l7CrvSyvhXQSElpe-OE8obr-E9qTfzpUoA2RUk0bzj_7kVcbV7vJTP5rOiVl4TlmOsFDz241sXgxZjgYz6Ix66PBKZKS4ZRgyfAwADQndZQhNBPyehEV9-Mcjpv3J-64-RzWGgP9KE8Mc-CnXV9S0oAqR-7hsM1N6wjtav',
    dest: 'public/images/activities/diksar.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJI4Vz6DlQdVsTtvLxOosaq_cMLtIhuSPYNWFYjKYApLd2z3ykKpiObHa_igNHJV-Z27QB60nhVk7Ufq1M9xzNuC8hMJQVqN7qjJ7XvTyBOwShHtsixtR-nZKRruQfWX6H45mj1mhpiKhUNHnLA7cwY0WusODtj8qIEdr4AuXJTxiCfoQfXsxmEleOOou2uPBx0hwY7FMI8bTJzF5EpMe2gh8u1hPb5PffPvN_BwnXomiXzWNVdpBH',
    dest: 'public/images/activities/lktd-main.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBezGvsm7stT1Gz2B29CThVKbudNk0F2dWRavutvxPQCtWci-a3hgL6VJk3tR-KkiXGsNvk09roLCBELa2gmhrNIbz1WunhCpfY9nU5azPntdENUGrLGHkZtFgaEu1heaxq2xZneW1zZ4Rze7-eeZ6z1Jg6jtZ36GhURbY4Vp9d0uVulxXC31RYPb2vvDvyDrUffCF45Az_lNP4rXWCb5KxSmwG88PNlBC8PvUVtShWTEZPZSl8UL1W',
    dest: 'public/images/activities/gallery-1.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCA6bBds71oKjYY30DtHJWeE8aisrCIQXkOFQXtQ1bL4IutMf-cUOeX2Z4EfSBtFkCmKb6hAmgrOvg_qGih88J4Yug71fH8nNb7hIrHZzAqsW092_oJEbHULMM-o_ofeoKdEBK_wtjtsv0IhrFZ4BejFgeHEV5BPOfvfemoUcHxcpHHYkszXudPHra8UtykoGSeoCz0zp_poxZ7uW38yROE_LCjyc1XjGxbpOyXq4I-LnW_RFa7u4m5',
    dest: 'public/images/activities/gallery-2.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2aCcqyY3b9o3kmLEATndS363oUWX0K3T1SHEFpbXV3cPaWuJmqVykrKQpxzrMGH4IWrDx2hdxZL1-LYlwIv7yfiVrbjVgnGd_w1y7LePDtbEi_a4xOzUHhI4IUKyTBm635zO47NkTGd60_9rkpt89TBpsQT6FB2WwUY2cs3TxbpWDZjhVu4A69oVwwlcxSNokJLbwU71tjw9fQSwCxQxxWWg1MKsj8E-8su2zNzrAVHhlwI2zaREy',
    dest: 'public/images/activities/gallery-3.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYBgsN0JhGQcLLV6_LL77H4v1cbweadof-2oPgwcCr4QzZJ4HIMFRFf95VeqLDzXnY-iBMOGbe-y9E_XW8Wkyaz4sOHyC8uB0yCSbmGu99bCnObWiSS83Lq72PgMwNVSQSncS3oiaQrrmhlYaNLcWERboVgL1ZdyCUAaU-xDbXOQBPJOf2buGT8Zg4hvNRvFcu4OyWfJUDposVvdwj_8xa7AQgvLeP7UHZBQZMDpng-sXrHrat_-M9',
    dest: 'public/images/contact/mako-bg.jpg'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuehD9Rfnyv00vchLt_8_lko93x3K0Y5kkcK7xmF5iXr8Hr0n060k3x36YjitapYDKVK5fc-tSTDckdFqAcfAhrwHfn1v2S_2J62UTqmU_Cdh09DP6m3KlTTt5Gatr4hXF4fLR6IVvOGTsyea1tUBxS-DxRtuKJN3N70IUnSm5wHxuWpHxOkgCw5et7-i-WPMnheN8lQ_TLLugElfMNfxVIxi5LHTtzLtM06Guf1awq8LP8TMoE-cq',
    dest: 'public/images/contact/map.jpg'
  }
];

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const dir = path.dirname(dest);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`Failed to download ${url}: status ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function run() {
  // Ensure logo dir
  fs.mkdirSync('public/images/logo', { recursive: true });
  
  // Copy local logos (arsip di archive/stitch-exports setelah refactor)
  const logoCandidates = [
    'logo_menwa_polinema/screen.png',
    'archive/stitch-exports/logo_menwa_polinema/screen.png',
  ];
  const badgeCandidates = [
    'image.png/screen.png',
    'archive/stitch-exports/image.png/screen.png',
  ];
  for (const src of logoCandidates) {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, 'public/images/logo/logo-menwa.png');
      console.log(`Copied logo-menwa.png from ${src}`);
      break;
    }
  }
  for (const src of badgeCandidates) {
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, 'public/images/logo/satmenwa-874-badge.png');
      console.log(`Copied satmenwa-874-badge.png from ${src}`);
      break;
    }
  }

  for (const item of assets) {
    try {
      console.log(`Downloading ${item.dest}...`);
      await downloadFile(item.url, item.dest);
      console.log(`Saved ${item.dest}`);
    } catch (err) {
      console.error(`Error downloading ${item.dest}:`, err.message);
    }
  }
}

run();
