        document.addEventListener('DOMContentLoaded', function () {
            const sidebar = document.getElementById('sidebar');
            const content = document.getElementById('content');
            const toggleBtn = document.getElementById('toggle-sidebar');

            // Function to check screen size and adjust sidebar visibility
            function checkScreenSize() {
                if (window.innerWidth <= 768) {
                    // Small screen - sidebar should be hidden by default
                    sidebar.classList.remove('show');
                } else {
                    // Large screen - sidebar should always be visible
                    sidebar.classList.remove('show'); // Remove any toggle classes
                }
            }

            // Toggle sidebar on button click (only works on small screens)
            toggleBtn.addEventListener('click', function () {
                sidebar.classList.toggle('show');

                // Change icon based on sidebar state
                const icon = toggleBtn.querySelector('i');
                if (sidebar.classList.contains('show')) {
                    icon.classList.remove('bi-list');
                    icon.classList.add('bi-x-lg');
                } else {
                    icon.classList.remove('bi-x-lg');
                    icon.classList.add('bi-list');
                }
            });

            // Check screen size on load and resize
            window.addEventListener('resize', checkScreenSize);
            checkScreenSize();
        });