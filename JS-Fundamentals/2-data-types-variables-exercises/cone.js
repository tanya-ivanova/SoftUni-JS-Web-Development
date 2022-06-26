function cone (radius, height) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3;

    /* πr(r + √(r2 + h2)) */

    let totalSurfaceArea = Math.PI * radius * (radius + (Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2))));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);

}

cone(3,
    5);