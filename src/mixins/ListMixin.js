import bus from '../utils/bus.js';

// mixin
export default {
    // 재사용할 컴포넌트 옵션
    mounted() {
        bus.$emit('end:spinner');
    },
}


// HOC
// export default function createOpt() {

// }