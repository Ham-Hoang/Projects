import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
// Importing homeview to display home page introduction

const router = createRouter({
// Creates functionality for the back button to work on the webpage once instance starts
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
// set path for page using home.vue file from the views folder and the imported module HomeView
// List of paths below that are associated with their respective component/view files
// Template referenced from Professor Lindners lecture over VueJS router page setup
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {	
      // renders create contacts page on its specific path
      path: '/create3',	
      name: 'Create Contact',	
      component: () => import('../components/createContacts.vue')	
    },	
    {	
      //renders view contacts page to its path
      path: '/view3',	
      name: 'View Contact',	
      component: () => import('../components/viewContacts.vue')	
    },	
    {	
      // renders edit contacts page
      path: '/edit3/:id',	
      name: 'edit3',	
      component: () => import('../components/editContacts.vue')	
    },	
    {	
      // renders view family page
      path: '/view6',	
      name: 'View Family',	
      component: () => import('../components/viewFamily.vue')	
    },	
    {	
      // renders create family page on its path
      path: '/create6',	
      name: 'Create Family',	
      component: () => import('../components/createFamily.vue')	
    },	
    {	
      // Renders edit Family page on specific path
      path: '/edit6/:id',	
      name: 'edit6',	
      component: () => import('../components/editFamily.vue')	
    },
    {
      // sets create workers component file to its respective path
      path: '/create7',
      name: 'Create Workers',
      component: () => import('../components/createWorkers.vue')
    },
    {
      // Sets view worker component file to its respective path
      path: '/view7',
      name: 'View Workers',
      component: () => import('../components/viewWorkers.vue')
    },
    {
      // sets edit workers page to respective path
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../components/editWorkers.vue')
    },
    {
      // Sets list education page view file to respective path
      path: '/view4',
      name: 'viewEducation',
      component: () => import('../views/ListEducation.vue')
    },
    {
      // sets list events view file to respective path
      path: '/view2',
      name: 'viewEvents',
      component: () => import('../views/ListEvents.vue')
    },
    {
      //renders create education page
      path: '/create4',
      name: 'createEducation',
      component: () => import('../views/CreateEducation.vue')
    },
    {
      //renders create event page
      path: '/create2',
      name: 'createEvent',
      component: () => import('../views/CreateEvent.vue')
    },	
    {	
      //renders edit education page
      path: '/edit/:id',	
      name: 'editEducation',	
      component: () => import('../components/editEducation.vue')	
    },	
    {	
      //renders edit event page
      path: '/edit/:id',	
      name: 'editEvent',	
      component: () => import('../components/editEvent.vue')
    },
    {
      //create a client entry
      path: '/client/create',
      name: 'create-client',
      component: () => import('../views/CreateClient.vue')
    },
    {
      //display/list all clients
      path: '/client/view',
      name: 'view-clients',
      component: () => import('../views/ListClients.vue')
    },
    {
      //edit a client entry
      path: '/client/edit/:id',
      name: 'edit-client',
      component: () => import('../components/EditClient.vue')
    },
    {
      //display/list all clients
      path: '/client/show',
      name: 'show-client',
      component: () => import('../views/ShowClient.vue')
    },
    {
      //create a employment entry
      path: '/employment/create',
      name: 'create-employment',
      component: () => import('../views/CreateEmployment.vue')
    },
    {
      //display/list all employments
      path: '/employment/view',
      name: 'view-employments',
      component: () => import('../views/ListEmployments.vue')
    },
    {
      //edit a employment entry
      path: '/employment/edit/:id',
      name: 'edit-employment',
      component: () => import('../components/EditEmployment.vue')
    },
    {
      path: '/register',
      name: 'eventSelectForm',
      component: () => import('../views/eventSelectForm.vue')
    },
    {
      path: '/intakeform/:id',
      name: 'intakeForm',
      component: () => import('../views/intakeForm.vue')
    },
    {
      path: '/intakeform/:eventid/:id',
      name: 'intakeFormExisting',
      component: () => import('../views/intakeFormExisting.vue')
    }
  ]
})

export default router
