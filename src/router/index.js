import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/views/Admin/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/admin/machines'
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: 'machines',
          name: 'machines',
          component: () => import('../views/Admin/Machines/index.vue'),
          children: [
            {
              path: "",
              name: "all machines",
              component: () => import('../views/Admin/Machines/all.vue')
            },
            {
              path: "new-linux",
              name: "new-linux",
              component: () => import('../views/Admin/Machines/new-linux.vue')
            },
            {
              path: ":id",
              name: "machine detail",
              component: () => import('../views/Admin/Machines/id.vue')
            }
          ]
        },
        {
          path: 'users',
          name: 'users',
          component: () => import('../views/Admin/Users/index.vue')
        },
        {
          path: 'acls',
          name: 'access control rules',
          component: () => import('../views/Admin/Acls/index.vue'),
          children: [
            // JSON EDITOR ROUTES
            {
              path: "",
              name: "acls json",
              redirect: "/admin/acls/file",
              component: () => import('../views/Admin/Acls/json/index.vue'),
              children: [
                {
                  path: "file",
                  name: "acls file",
                  component: () => import('../views/Admin/Acls/json/file/index.vue')
                },
                {
                  path: "diff",
                  name: "acls diff",
                  component: () => import('../views/Admin/Acls/json/diff/index.vue')
                },
                {
                  path: "preview",
                  name: "preview diff",
                  component: () => import('../views/Admin/Acls/json/preview/index.vue')
                },
              ]
            },
            // VISUAL EDITOR ROUTES
            {
              path: "visual",
              name: "acls visual",
              redirect: "/admin/acls/visual/general-access-rules",
              component: () => import('../views/Admin/Acls/visual/index.vue'),
              children: [
                {
                  path: 'general-access-rules',
                  name: 'acls visual general-access-rules',
                  component: () => import('../views/Admin/Acls/visual/general/index.vue')
                },
                {
                  path: 'tailscale-ssh',
                  name: 'acls visual tailscale-ssh',
                  component: () => import('../views/Admin/Acls/visual/ssh/index.vue')
                },
                {
                  path: 'tests',
                  name: 'acls visual tests',
                  component: () => import('../views/Admin/Acls/visual/tests/index.vue')
                },
                {
                  path: 'groups',
                  name: 'acls visual groups',
                  component: () => import('../views/Admin/Acls/visual/groups/index.vue')
                },
                {
                  path: 'tags',
                  name: 'acls visual tags',
                  component: () => import('../views/Admin/Acls/visual/tags/index.vue')
                },
                {
                  path: 'ipsets',
                  name: 'acls visual ipsets',
                  component: () => import('../views/Admin/Acls/visual/ipsets/index.vue')
                },
                {
                  path: 'hosts',
                  name: 'acls visual hosts',
                  component: () => import('../views/Admin/Acls/visual/hosts/index.vue')
                },
                {
                  path: 'node-attributes',
                  name: 'acls visual node-attributes',
                  component: () => import('../views/Admin/Acls/visual/node-attributes/index.vue')
                },
                {
                  path: 'posture',
                  name: 'acls visual device posture',
                  component: () => import('../views/Admin/Acls/visual/posture/index.vue')
                },
                {
                  path: 'auto-approvers',
                  name: 'acls visual auto-approvers',
                  component: () => import('../views/Admin/Acls/visual/auto-approvers/index.vue')
                },
              ]
            },
            {
              path: 'visual/general-access-rules/add',
              name: 'general acls add rule',
              component: () => import('../views/Admin/Acls/visual/general/add/index.vue')
            },
            {
              path: 'visual/general-access-rules/:id/edit',
              name: 'general acls edit rule',
              component: () => import('../views/Admin/Acls/visual/general/edit/index.vue')
            },
          ]
        },
        {
          path: 'logs',
          name: 'logs',
          component: () => import('../views/Admin/Logs/index.vue')
        },
        {
          path: 'dns',
          name: 'dns',
          component: () => import('../views/Admin/DNS/index.vue')
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/Admin/Settings/index.vue'),
          children: [
            {
              path: "general",
              name: "general",
              component: () => import('../views/Admin/Settings/General.vue')
            },
            {
              path: "user-management",
              name: "user management",
              component: () => import('../views/Admin/Settings/UserManagement.vue')
            },
            {
              path: "device-management",
              name: "device management",
              component: () => import('../views/Admin/Settings/DeviceManagement.vue')
            },
            {
              path: "policy-file-management",
              name: "policy file",
              component: () => import('../views/Admin/Settings/PolicyFileManagement.vue')
            },
            {
              path: "trust-credentials",
              name: "trust credentials",
              component: () => import('../views/Admin/Settings/TrustCredential.vue')
            },
            {
              path: "webhooks",
              name: "webhooks",
              component: () => import('../views/Admin/Settings/Webhooks.vue')
            },
            {
              path: "contact-preferences",
              name: "contact preferences",
              component: () => import('../views/Admin/Settings/Contact.vue')
            },
            {
              path: "billing",
              name: "billing",
              component: () => import('../views/Admin/Settings/Billing.vue')
            },
            {
              path: "keys",
              name: "keys",
              component: () => import('../views/Admin/Settings/Personal/Keys.vue')
            },
          ]
        },
        {
          path: 'resource-hub',
          name: 'resource hub',
          component: () => import('../views/Admin/ResourceHub.vue')
        }
      ]
    },
  ],
})

export default router
