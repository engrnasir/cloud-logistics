import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useRulesStore = defineStore('rules', () => {
  const rules = ref([
    {
      id: 1,
      source: ["All users and devices"],
      destination: ["autogroup:member", "autogroup:admin"],
      port: ["All ports and protocols"],
      note: "Allow all connections. Comment this section out if you want to define specific restrictions.",
      json: {
        "_comment": "<br>// Allow all connections. <br>// Comment this section out if you want to define specific restrictions.",
        data: {
          "src": ["All users and devices"],
          "dst": ["autogroup:member", "autogroup:admin"],
          "ip": ["All ports and protocols"]
        }
      }
    },
    {
      id: 2,
      source: ["All users and devices"],
      destination: ["All users and devices"],
      port: ["All ports and protocols"],
      note: "",
      json: {
        "_comment": "",
        data: {
          "src": ["All users and devices"],
          "dst": ["All users and devices"],
          "ip": ["All ports and protocols"]
        }
      }
    },
  ])
  function updateRule() {

  }

  return { rules, updateRule }
})
