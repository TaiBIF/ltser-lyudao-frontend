import Swal from 'sweetalert2';

export const swalToast = Swal.mixin({
  toast: true,
  position: 'top-start',
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: false,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  },
  customClass: {
    container: 'c-alert__container',
    popup: 'c-alert__toast',
    title: 'c-alert__title',
  },
});
