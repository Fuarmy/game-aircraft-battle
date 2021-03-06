import { defineComponent, h, toRefs, onMounted, onUnmounted } from "@vue/runtime-core";
import planeImg from "../assets/images/plane.png";

export default defineComponent({
    props: ["x", "y"],
    setup(props, { emit }) {
        const { x, y } = toRefs(props);
        return { x, y };
    },
    render(ctx) {
        return h("Container", { x: ctx.x, y: ctx.y }, [
            h("Sprite", {texture: planeImg})
        ]);
    }
})