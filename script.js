

// Animated Mesh Mouse Hover
let mesh_mouse_hover = document.getElementById("mesh-mouse-hover");
const onMouseMove = (e) => {
    const style = getComputedStyle(mesh_mouse_hover);
    mesh_mouse_hover.style.left = `calc(${e.pageX}px - (${style.width}/2))`;
    mesh_mouse_hover.style.top = `calc(${e.pageY}px - (${style.height}/2))`;
};
document.addEventListener("mousemove", onMouseMove);