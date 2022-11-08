<template>
   <nav>
      <div class="navTop">
         <div class="navLogo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="100%" height="100%"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
         </div>
         <div class="navBurger" @click.prevent="showMenu()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" width="100%" height="100%"><g fill="#D0D6F9" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
         </div>
      </div>
      <div class="navContent">
         <ul>
            <li v-for="(link, index) in navLinks" :key="link" class="navBlock">
               <router-link :to="'/' + link.link">
                  <div><span class="navIndex">{{index}}</span>{{link.name}}</div>
               </router-link>
            </li>
         </ul>
      </div>
   </nav>
   
</template>

<script>

export default{
   name: "NavApp", 
   setup(){
      const navLinks = [
         {
            link: '',
            name: 'home',
         },
         {
            link: 'destination',
            name: 'destination',
         },
         {
            link: 'crew',
            name: 'crew',
         },
         {
            link: 'technology',
            name: 'technology',
         },
      ];

      // Methods
      const showMenu = () => {

         const navContent = document.querySelector('.navContent');
         if(!navContent.classList.contains('navActiv')){
            navContent.classList.toggle('navActiv');
         }else{
            navContent.classList.remove('navActiv');
         }
      }

      return {
         // Variables
         navLinks,

         // Methods
         showMenu,
      };
   }
}

</script>