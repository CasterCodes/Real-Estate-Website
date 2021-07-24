export const adminurls = [
  {
    url: "/dashboard",
    name: "Dashboard",
    icon: "fas fa-chart-line",
    subUrl: false,
  },
  {
    url: "/profile",
    name: "My Profile",
    icon: "far fa-user",
    subUrl: false,
  },
  {
    url: "/messages",
    name: "Messages",
    icon: "far fa-envelope",
    subUrl: false,
  },
  {
    url: "/mylisting",
    name: "My Listing",
    icon: "far fa-list-alt",
    subUrl: false,
  },
  {
    url: "#",
    name: "Listing",
    icon: "fas fa-layer-group",
    subUrl: true,
    subUrls: [
      { url: "/add-listing", name: "Add Listing", icon: "fas fa-plus" },
      { url: "/all-listing", name: "All Listing", icon: "far fa-list-alt" },
    ],
  },
  {
    url: "#",
    name: "Agents",
    icon: "fas fa-users",
    subUrl: true,
    subUrls: [
      { url: "/all-agents", name: "All Agents", icon: "far fa-list-alt" },
    ],
  },
  {
    url: "change-password",
    name: "Change Password",
    icon: "fas fa-unlock-alt",
    subUrl: false,
  },
  {
    url: "#",
    name: "Logout",
    icon: "fas fa-sign-out-alt",
    subUrl: false,
  },
];
