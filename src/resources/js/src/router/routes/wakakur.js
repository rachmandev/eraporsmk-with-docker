export default [
  {
    path: '/progress/penilaian',
    name: 'progress-penilaian',
    component: () => import('@/views/progress/Penilaian.vue'),
    meta: {
      resource: 'Waka',
      action: 'read',
      pageTitle: 'Nilai Akademik',
      breadcrumb: [
        {
          text: 'Monitoring',
        },
        {
          text: 'Nilai Akademik',
          active: true,
        },
      ],
    },
  },
  {
    path: '/progress/nilai-projek',
    name: 'progress-nilai-projek',
    component: () => import('@/views/progress/NilaiProjek.vue'),
    meta: {
      resource: 'Waka',
      action: 'read',
      pageTitle: 'Nilai Projek',
      breadcrumb: [
        {
          text: 'Monitoring',
        },
        {
          text: 'Nilai Projek',
          active: true,
        },
      ],
    },
  },
  {
    path: '/progress/nilai-ekskul',
    name: 'progress-nilai-ekskul',
    component: () => import('@/views/progress/NilaiEkskul.vue'),
    meta: {
      resource: 'Waka',
      action: 'read',
      pageTitle: 'Nilai Eksktrakurikuler',
      breadcrumb: [
        {
          text: 'Monitoring',
        },
        {
          text: 'Nilai Eksktrakurikuler',
          active: true,
        },
      ],
    },
  },
  {
    path: '/progress/nilai-ukk',
    name: 'progress-nilai-ukk',
    component: () => import('@/views/progress/NilaiUkk.vue'),
    meta: {
      resource: 'Waka',
      action: 'read',
      pageTitle: 'Nilai UKK',
      breadcrumb: [
        {
          text: 'Monitoring',
        },
        {
          text: 'Nilai UKK',
          active: true,
        },
      ],
    },
  },
  {
    path: '/progress/nilai-pkl',
    name: 'progress-nilai-pkl',
    component: () => import('@/views/progress/NilaiPkl.vue'),
    meta: {
      resource: 'Waka',
      action: 'read',
      pageTitle: 'Nilai PKL',
      breadcrumb: [
        {
          text: 'Monitoring',
        },
        {
          text: 'Nilai PKL',
          active: true,
        },
      ],
    },
  },
  {
    path: '/progress/cetak-rapor',
    name: 'progress-cetak-rapor',
    component: () => import('@/views/progress/CetakRapor.vue'),
    meta: {
      resource: 'Waka',
      action: 'read',
      pageTitle: 'Cetak Rapor Semester',
      breadcrumb: [
        {
          text: 'Monitoring',
        },
        {
          text: 'Cetak Rapor Semester',
          active: true,
        },
      ],
    },
  },
  {
    path: '/progress/unduh-legger',
    name: 'progress-unduh-legger',
    component: () => import('@/views/progress/UnduhLegger.vue'),
    meta: {
      resource: 'Waka',
      action: 'read',
      pageTitle: 'Unduh Leger',
      breadcrumb: [
        {
          text: 'Monitoring',
        },
        {
          text: 'Unduh Leger',
          active: true,
        },
      ],
    },
  },
  {
    path: '/progress/buku-induk',
    name: 'progress-buku-induk',
    component: () => import('@/views/progress/buku-induk/Index.vue'),
    meta: {
      resource: 'Waka',
      action: 'read',
      pageTitle: 'Buku Induk',
      breadcrumb: [
        {
          text: 'Monitoring',
        },
        {
          text: 'Buku Induk',
          active: true,
        },
      ],
    },
  },
]
