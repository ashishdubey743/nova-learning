import CreateProfileButtonCard from './cards/CreateProfileButtonCard';

Nova.booting((app, store) => {
  Nova.inertia('Profile', require('./pages/Tool').default);

  app.component('create-profile-button-card', require('./cards/CreateProfileButtonCard').default);

  // Mixin to handle DOM manipulation
  app.mixin({
    mounted() {
      if(document.querySelector('[resourcename="profiles"]')){
        document.querySelector('[resourcename="profiles"]').style.display="none";
      }
      this.$nextTick(() => {
        // Ensure DOM manipulation after everything is rendered
        const parentDiv = document.querySelector('.relative[dusk="profiles-index-component"]');
        
        if (parentDiv) {
          // Find the button container div where we want to inject the custom button
          const buttonContainer = parentDiv.querySelector('.relative .flex.gap-2.mb-6');
          
          if (buttonContainer) {
            // Check if the custom button is already appended
            const existingButton = buttonContainer.querySelector('.custom-create-profile-button');
            
            if (!existingButton) {
              // Create a wrapper div for the custom button
              const buttonWrapper = document.createElement('div');
              buttonWrapper.classList.add('shrink-0', 'custom-create-profile-button', 'ml-auto'); // Add custom class for identification
  
              // Append the wrapper to the button container
              buttonContainer.appendChild(buttonWrapper);

              // Use Vue 3's createApp to mount the component
              const createProfileApp = Vue.createApp(CreateProfileButtonCard);

              // Mount the Vue app to the wrapper div
              createProfileApp.mount(buttonWrapper);
            }
          }
        }
      });
    }
  });
});
