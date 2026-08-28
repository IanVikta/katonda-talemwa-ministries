export interface ChildProfile {
  id: string
  name: string
  age: number
  gender: 'boy' | 'girl' | 'woman'
  location: string
  image: string
  description: string
  type: 'baby' | 'child' | 'mother'
}

export const children: ChildProfile[] = [
  {
    id: 'sarah',
    name: 'Sarah',
    age: 4,
    gender: 'girl',
    location: 'Gulu, Uganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6y56oBsMWN9DQPev8ZmKzLaWamFuXAwYYwLoKyfk07pdytAjs0fVZmgddCllkNH2KAPh7QOU9_oCjLHpXItxzryFuwiyQIRx1CwGCvNeoYq16DMXOFDgEEogrnxUV18fg7z1aULbkGVw1CiuinfA8TVZmoNbYKPX1ovWExMuivq9rpFVcB2uuLsg70plzLz-8gEMm2YM9Lno-rJNlWPPB0aOdc8KNVoiiZ6mv7CiIHwe_onrToEaqx0cPmP7_03aPcXCJTNwL5LI',
    description: 'Sarah is a bubbly girl who loves singing and playing with her friends in the village. She dreams of being a teacher.',
    type: 'child',
  },
  {
    id: 'david',
    name: 'David',
    age: 8,
    gender: 'boy',
    location: 'Kampala, Uganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAY37c-fstO13vILJbLMwYIR9LpymZ26ih1qt3v-kba_5B2PpugKIIsq0820ra9MqoIPV8FAUjqq4x1b00ntQw_6Nangq_Wjkq5JwlY4TU5y2Dg-UBjRV26_MasUTTnUsz9s27d2rm8XMPJGqMMlFHBt80r4YJt22BmcZfySd-kpHa4jDpRyVtUqq2aGRQ1fZIsuJj6UuAQieZt8mpmUqOapXyCR0sTpQ88Sopj_9Lpu5gVTfB17oy3Eufx0m_4ht_mmlus5bmk9M',
    description: 'David is passionate about mathematics and soccer. He is the first in his family to attend school consistently.',
    type: 'child',
  },
  {
    id: 'grace',
    name: 'Grace',
    age: 10,
    gender: 'girl',
    location: 'Gulu, Uganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDC-fHIVY-dPlP8s2E1gL1e3fSxgEogz7Uu3UArx2hWLHckxauTmXhvHbvP5hogYkiKO6Dg3RDaPMfE7NYAP5YFXhyat0eN0Lv2AXgcPB_tw67aajz9Sh3jyqCh-MSODU9pcB7XSzIGGrO-FUZpYWBise2tl7o_i8L9lyWujuCmwerVrWP214heeC7sa5z9HZPNgT86vcZGRayAIYBIYQqapbKkKgRnMY9R3_FL8ZZKe8aOtx0VaC7fRFTEYJ_0tCmf-Z4Fu31gI6E',
    description: 'Grace is a creative soul who enjoys drawing and helping her Katonda Talemwa mother in the kitchen.',
    type: 'child',
  },
  {
    id: 'samuel',
    name: 'Samuel',
    age: 2,
    gender: 'boy',
    location: 'Kampala, Uganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDd33Y_2UeGM5bJO_SGlNe1W5lswN-_S3NYLbRC4C3Xrwk-2vV756c371iFoOeb84W0hE-2pDt2D3Boz-3n7bBu_Hxg7UMPNSFd-TPmBQVA-yzJE50TGmjU6IOi7vdF6I1r5e4e5HKnmDHwCWMIdIyFgG2W34kqC6y40YMBB-hyd6vDszwNaJbFuPFJotnHny2m0WgtmDQCzJbnQDoT28TqZ0TxrqbLAIJIHnpCCduU5Vkm6KkrmsBnm2iL8N3KY8WRmoAsydE0QQ',
    description: 'Welcomed as an infant, Samuel is thriving in our baby home. He needs a sponsor to support his early development.',
    type: 'baby',
  },
  {
    id: 'isaac',
    name: 'Isaac',
    age: 14,
    gender: 'boy',
    location: 'Juba, South Sudan',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeljgmUWq0IAsU6-RGoc8Xx2NYCLvVyhNDikdYB64rqSz23mjE6P3hSycKSA7m5j3oEo3KQVijlpOHeDrZpOy3nDvpgmntQh9OMo1kjMijVjmL-bi_8A4XvqeFTcglNVxmocQeviTup-GF2YQxjiAyWCfqvwOKNeZKCUrgITsM4atGs8UFGInqQMh3VHn6ARiLnLeRnE75H5zm_51vDTDt6Hk5Nn2NyH_V6ppN2kpkTp5riHmS37zs_65RkWD3x5mPKSecuuELtBY',
    description: 'Isaac is developing into a strong leader. He excels in his vocational training and mentors younger boys.',
    type: 'child',
  },
  {
    id: 'martha',
    name: 'Martha',
    age: 11,
    gender: 'girl',
    location: 'Gulu, Uganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-dsMBGeZk6loR6UO1i98a7zLUDWmpLwHOIy_HzU_N-XZDAVrh_N7af8bZ3XZmYUxLdENFtaNGXFFHVDTRlClDUjlGydoNI_qj5T5kb670bPmwddl6e_77q3zCp1_2bdNc7vefHeMT2o4vyEwfPyTuSc6ujcEku-gzrJ7OxGgria1Q9Hw_I6IZAtLZW0L7vCJWQylShqesAwltCzbapJJwVH7BstFNB8hoYPA7p05k6u3U0ZMFAhgwMV-1ZaKgK6YsuMDTleVo-aQ',
    description: 'Martha is a bright student who loves science experiments. She wants to be a doctor one day.',
    type: 'child',
  },
  {
    id: 'jayson',
    name: 'Jayson',
    age: 1,
    gender: 'boy',
    location: 'Kampala, Uganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCNtSKp7y50-r-2jODV-Cg-iFhexYdQcfsnXUg9gUdIb3vNhgB1QqQ2e5a0r26_FoytE0V0X3jhojtcNbGDE0XgCszyTgPhdBjyAf1lCHv2CQb5pf5ENc12-hqXafsKJtjVoii7Dodf5OIkEeMz5hNnVJC5nZor1FPKqRNtXmargt6wW9EfjOm6_b_iZVBhtaKWksov7Q5ZWYJvfx_cOpIH5tt-73TP9qB4vqFR7tDDTEwvXDDJmGmk5RX7SZtKsKq_kMPqFt6-D_Q',
    description: 'Jayson was welcomed into our care when he was only 2 weeks old. He is growing stronger every day under nanny care.',
    type: 'baby',
  },
  {
    id: 'asha',
    name: 'Asha',
    age: 2,
    gender: 'girl',
    location: 'Gulu, Uganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzh8qsn2JCfLVB9eQ5WMlHGLyiEoq5p0gJwF8fpiEDLIDsNwhbjfM97qwzqzVO9eyALefC2Z65PbMhjQCwrQaXFpc65ej4RBNhDEMY1qJhXdwO4jrLvZEMak6sk0lvoBkUatG4j9ABVmRAyx6AWeJWyWCGY9QiRPwXlz7blg4jITOqo319ldOz2WD_kjTX6ZxHXpftB5zzcR55ubcuMym-ea-G2BgnJDtpxqI77BoMK94Dri8WDaXE32x6_cTKgJHVWs0FisI2Z1E',
    description: 'Asha was found when she was only 3 days old. Today she is a healthy, laughing toddler who loves playing with educational blocks.',
    type: 'baby',
  },
  {
    id: 'gerald',
    name: 'Gerald',
    age: 9,
    gender: 'boy',
    location: 'Gulu, Uganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7ZFiyCd-zuVvUi-0OmddhdIjLDAn0GyakIFih_rfN_pEnRHog443WYiNg9e1Ss04RBhDxpVA6-LrUhHPJq8Yl1OM7XH2Bzwy5LefcG2GCwLAa3CQuXH3ZL9wxSK4RwB74PlDkW7U7cuUePZTIW3MlqIK1nosuuth3Lbb4JRZG_j04IYTx4T2kwGXx7BIXaOzoZz3-6BDKDzI5HzT8eB1oFrsrojXm72nuu1mVx4FYfUahdZIluvQJ6Kjj_AkjRoxjExTgrVa_kXI',
    description: 'Gerald lost both parents but has found a home, a mother, and brothers in a Katonda Talemwa Village. He wants to study and become a engineer.',
    type: 'child',
  },
  {
    id: 'mama_phiona',
    name: 'Mama Phiona',
    age: 38,
    gender: 'woman',
    location: 'Gulu, Uganda',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDokPv7xL4QxzKaXFGE9JHtcX8mDUpqXr0wRYOec9evJdlzrT_dCiPQuJgTZqlL8pmUpk3NogeqfXtDKpgUNVRyWxfuJMk3Xj7uBb61Y7yp373WHqyvIGC68iqpT06r7nYFafNlMQxOafiS3RAJAxLv9cSmeOpfMd8XLGmutOsP6sJrYDaYu4BKGhqr0zchZ-IrwSP61z__ZJiaLHLfwq7cOmHg3yWxWSvOjI_VPUdb-qBWzNM6qoXpxMkmPMd0ZeuS1lDnEpziIjs',
    description: 'Phiona is a dedicated Katonda Talemwa Mother who has cared for over 15 children. She provides them with spiritual guidance and love.',
    type: 'mother',
  },
]

export const IMAGES = {
  heroHome: '/images/hero -1.jpg',
  villages: '/images/forgotten.jpg',
  babyWatoto: '/images/babies.jpg',
  neighbourhood: '/images/dignity.jpg',
  girlSchool: '/images/girl.jpg',
  church: '/images/church-1.jpg',
  villagesHero: '/images/hope.jpg',
  spiritualGrowth: '/images/choir.jpg',
  watotoMother: '/images/mother.jpg',
  samuelCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1d-IqepttNZNtfb4n74R5nN8-AONvFjqf2lw0hkseRunpA4wEKnodClshsbkVCPD-1Kh7enuSQP4O9ykOreb4VLsxQF06IcI-JB9Sc1pVg49XbwDbQLhrFACYPbBDZ7qTGR45Jol2J7-B2oBmoc81DOccpwNWa3IndATWm8JVkdd-9hhwwgkSurBnc-VS4QJ-stykqHU1-J-IFgaTn6HYQSq35NTC9PXNNPqq2yos-DFjtieUy3d_ab1bs3rSH8gdn3trURRb2nQ',
  babyHero: '/images/baby 2.jpg',
  rescue: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBT0wuQmp36cLMbKTkfDpkfke8QDEFoQUV5S0vI0RLFPM4-1aq1sbuVyfDbCTCZLZWTZswY-dEXrmpAwoxcZrhrA6GLQ74f_DmKyb-tubb08v6tcYBbbWoN_jlRegBxukeLlcaMncZl9eLdFRyk_t7LWEuJOnq45Ej1IC5H1KUcdbuSE_eTfBKW5IxBojsHvjSjsbSNkHVrtphMDuBZnacNh86MqBIe4UgdSBGWCSsmTZgpoiCYAoEDzB0Av6_tdxPcgJp61rSFPvc',
  nutrition: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCZvwFFqSO1c50qbknsFLLlr3erye1u3BWaLwmTOAoC017Ws2cuIqY3_3oQzcd5IGaVVRf6PYpmLkLMXtWz6-kav4aiHxIZp8oFZJveNWzhQolMDEyVX5C8I1i7a2beSB9FlfLGmiY5wyJ7HnRS5AyI7xSeVgvhxUjET6xteNA0XVvgNu3wAcrK_Ad8VRaNhFCCyZvWn8nvyeBxEfgvH0Lt-VQMdOl0cRkkCgRogS1LbCwvikrVT8_Omjl7SQWPR2Qb_fnWLXQyx-c',
  sponsorshipBaby: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzh8qsn2JCfLVB9eQ5WMlHGLyiEoq5p0gJwF8fpiEDLIDsNwhbjfM97qwzqzVO9eyALefC2Z65PbMhjQCwrQaXFpc65ej4RBNhDEMY1qJhXdwO4jrLvZEMak6sk0lvoBkUatG4j9ABVmRAyx6AWeJWyWCGY9QiRPwXlz7blg4jITOqo319ldOz2WD_kjTX6ZxHXpftB5zzcR55ubcuMym-ea-G2BgnJDtpxqI77BoMK94Dri8WDaXE32x6_cTKgJHVWs0FisI2Z1E',
  sponsorHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBp3L93wuuorZfa6rAuyEfXhUyDCEKSmEBrnt9qno9m0mHwahVAZDK0UmFJaawoXonPaJOkga-dLkokecRpQkAmQeLj5UQUwMqot1Cgbb9w59wd-9WHdM_ISGTZgjqxwi7ult1_kL5xlvoPH9m1xvbNQoUvMnWJSelj5yZruwID7AbMYSp0roKYZjXCaOaJZfn0Z3GDgKhViVfWK5vbNNl6vY-hcjoKNg0unA9cZGHmsvUMzVLRbSApAj4u7pcy-OmKIhpuFBKfxOY',
  sponsorImpact: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHXElVwkjxSZheCl7AhH7HwOBQAJxDKuOmDWhDSqA7crECCe3SnR1xkthGS64hSlWgt02fzlcQYZKUd0_l4mEOfPAciImbMAeHF7sxfq9KmbQ1B0s2XHUI3htftmg4eIy2KaYw4QAwsgvaF8BjOVJTcaiQIIiTswDelN-AZrNoS8FLzKSOvvVeqiusQRhXZwmE5bka0W5arrjSyaMYbHSn8MJ1zl79i07Y_8lVq7Of-kqF3G8LKBScQrgEaaWq5R4_1bSP6jBbLy4',
}
