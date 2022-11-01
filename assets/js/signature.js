const customerCanvas = document.querySelector("#customer-signature");
const selerCanvas = document.querySelector("#seler-signature");
const resetCustomer = document.querySelector("#reset-customer-signature");

const selersignaturePad = new SignaturePad(selerCanvas);
selersignaturePad.fromDataURL("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAfQB9AMBIgACEQEDEQH/xAAeAAEAAgIDAQEBAAAAAAAAAAAACAkEBwIFBgoBA//EADYQAQACAgEDAwQBAgQDCQAAAAABAgMEBQYHEQgSIQkTIjEUFUEjMlFhFkJSFyQzNWJzgZGS/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ALUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABCv1t/Uq6O9LXNR236O6fwdYddxipm3Ne+19rT4ml4i1I2LVibWy2rMWjFHtmK2i02jzWLQO1/q8es2/L7fP0p0jn0LW8/0/wDoFp1Nb+/it65PvePH/XltPiAXiiMPok9c3RPq96Zz6n8XHwXXnC4IzcxwcWtak4vdFY2de8x+eKZmsTE/lS0xFviaWvJ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0vWvUur0X0dz3WO9Wba3BcZtcnmiI8zNMGK2S3iI/fxWXdMTluK4/neK3eE5fVps6PIa+TV2sF/Pty4slZrek+PnxNZmP/kHz8eiDtZj9U/rA4HjO5ufZ5vT3Nzc6m6kybF/fff8AtRbNaMsz82jLnnHW/wDea5LeJiflf1t9HdJ73S2boja6b4y/T2xq20snF/xaRq217R4nH9qI9sV8T+ohQfk1Orfp5+uPDTNn2a6vSPO1vXLHiZ5LgNifHmYjzEzk1bz5j59uSJj/ADU8r/eJ5Xjee4rS5zht3FuaHI6+Pb1djDb3UzYclYtS9Z/vE1mJif8ASQUbdyencP04/X/xOx0dyvLf8LaW3pcpFbx4zZeF2reNnVm1o9uWIiuXHF/7zSPMxaJ8Xoa+xr7mvi29TPjz4M9K5MWXHaLUvSY8xasx8TExPmJhXN9aLsxq9Q9pumO9+jgiOQ6S5D+k7tq0+cmltzHsm0/6UzUrFf8AfPb/AFb/APptd2Nzu56Qui+S5XZybHJ9PUy9N7uTJb3WtOpb24pmZ+ZmcE4JmZ+fMz8z+wSeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABXT9YX0y8j3C7fcR6gOktCdjlOh8VtHmsWOZnJl4rJkiaXrXxPu+zlvaZiPH45r2n4r8eg+kl6nNTul2Xjsj1Jy2O3VfbzF9vUxZL/wCLtcL5rGHJWPEeYw2tGCfHnxWMPmfN4Tw29TV39XNob+ti2dbZx2w5sOakXpkpaPFq2rPxMTEzExPxMSpA9Q/bvqL6aXrO4HuN20w5r9Jb2eeY4XBbJb25dGbxXd4u+S3mZ9sW9sW/KYpkw2mZt5Ba360uhJ7kelLuj0nSY+7l6c2t3BE/82bViNnHX/bzfDWPP+6EX0Qe4lMvC9ze0+zkx1vrbWl1Fp08z7skZKWwbE/6eK/a1f8A9z/osY6I6z6O74dsOO6z6V3p3OnureMnJhyR7ffGPJWa3paPyrF6z7qWj5iLVmPnwqR+jZyF+mvVV1l0bveaZNrpTcweJ+JnPr7ut8THnx/l+5P+3gFzoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRHrP9MvEeqjshy3QOSmDF1BqRPIdOb2W01jW36R+MWmPP4ZK+cd/ifFbzMfMRMb3AVD/Sr9UPL9nu43IekDu79/jdblOTy4uFptxFbcbzUW9uXTv5/Vc018Vjz4jLWIiJnLMxrf0g9adG9nPqI9d9VdX9RavT3S/AbPVn83bz3+3ix4KZcsUp7ax+UzaKVpjrE2teaVrWbTWG8fq4+kbkMW3h9WnbHjMmPLqxjx9YfxskUvitScePV36VjxaZifFMk18zHtx28REXtFW3IcrzXUnNbvKbuxm2+S5rZvm2rVr+Wzmy5PfbzWseJmbz58RH78eIB9JfYz1JdlvUjw29znZvrbDz2DismPDv4/4ufWzat8lZtSL481KWiJ9tvFoiazNbeJnxLZqGP0wfSTz/po7R8l1N13/J1ur+4c6e7yHF5IiteM1cFcv8bBasx7oz/94y2yeZ+JtWniJpa1pnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOv6g6g4PpPg9/qbqbltTi+J4vXvt7u7t5Yx4dfDSPNr3tPxERETPk6g6g4PpPg9/qbqbltTi+J4vXvt7u7t5Yx4dfDSPNr3tPxERETPlRt9QL6gXOeqDnMvb3t7sbfF9ruL2POLFMTjzc5mpP47OxX9xjiY848M/r4vePf7a4w4/UE9f/NeqPncnb/t/m2eM7X8Rs+/BjtE483N56T+O1nr+644/ePFP6/z3/PxXHHr08avXeL1BdvsXb/hMO/1bp9T8fm4zR26xGO+3i2KXrXL7pj21iaebTMxNYiZ8xMeU7vpu/Tdy9UZeL9QvqF4G+PhMdqbnTPTO5imLcjaJ803Nuk/rXifE48U/wDi/FrR9rxGbSfon9ncP6mnDc1tWnNTc6p6h5u95jxM2rr7uelvE/8Ariv/ANgveAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdf1B1BwfSfB7/AFN1Ny2pxfE8Xr3293d28sY8OvhpHm172n4iIiJnydQdQcH0nwe/1N1Ny2pxfE8Xr3293d28sY8OvhpHm172n4iIiJnypT9c3rZ639aHXWp2K7C8bzG10PTdjHp6Glq5J3epdykzNc+THEe+MNfHux4piPHj7mSPdFa4g6T1++v3qH1UdQ27bdtr7vH9s+P2ojX14ramxz2xW34bGen7jHFvE4sM/r4vePf7a45E+gH6XM6l+L72ep3g8lNrDlja4fozcwxEU9v+TNyFbfufP5RrzHx4r9zz5tjjqPTz219G3oGx4O4nqa7l9P8AU/d3BXHn1+n+KmOUt09mifP2648Xup/JrM/OXLNYrNP8Of8Anv2PcT63f2uctr9qOyVdniMdbRG1z/ITi2M1vdHtt9rDFq0j2xPx77TM2j5j2/kFgHqg72cR6fOxfVvc/kuR1tbb47js2Ph8WbJWs7fJ3x2jWw0i3+aZyeJmIiZilb28TFZVd/Rn7JbPVvevne+XJY89eO6G0b6ejk+Yrm5HcpbHPz/zRTX+97q/uJy4p8/2nw/FdC+t76nXX/Fc71lHI63R9MuW+Dls2jbV4DicE3iMv8SkzEbGTzEV8VtfLb2x77xFZtW4n0/9hOgPTb2y47tb250smLj9OZz7Oznt7tjf27xEZNnNaPib29tf1ERWK1rWIrWIgNjgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ3qP8AW36fPS7Sun3H6qybXPZKRkxdPcPjrtclak/q1sc2rTFWYnzE5b0i3ifb58Srn7q/WU77dbbv9C7HdAcV0lTazUw6ubPSeW5LJafxrWtbVjD5tafiv27z+oiZ/uFx2bNi18V8+fLTHix1m973tEVrWI8zMzP6iIRe7y/Up9JXZqdjS2e4UdV8tr3vitxvTGON68XrHzFs3urgr8zEfOTz58/HxPilXvl3k9S3W/M7fDd+e4HVu3u+6J2uG5Tbvhpr293vit9KPbTBaJ8T7Jx1mPxnx48NiekX0Bd4/VXyOvzGtp5OmehKZYrt9Sb2GfZkiJmLU1Mc+J2L/Ex5iYpWY/K0T4iQ7D1Xetjvb62+qMPR3A8HyOh0nizzbiuk+IjJs5tq8ePGXZ+3HnYyx481iKxWkT4rHn3Xs7SfTY9aXcSltjQ7ebPRmhu0jWzbPUm3/TPdjtavurk1/nYmkfFpicUx+Px5tEQun9P/AKZ+0Hpp6SwdK9r+ldbUyRjim7yubHW/Ichbz5m+fP4i1vn5iseKV/VaxHw2mCrfsz9E7i9bL/P7/wDdXJu+y8TTjelK/ax2iJ8/ns7GObTE/qa1xVmPnxf/AEm/2s9GXpg7OcfTR6I7MdN1yxXxfe5HVjkNzJPj5mc+x77xE/ua1mK/6REeIbpAcMOHFr4qYMGKmPFjrFKUpWIrWsR4iIiP1EQ5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADH5HkeP4jj9nluW3tfS0dLDfY2dnYy1x4sGKlZtfJe9piK1rWJmZmfEREzIP3e3tLjNLY5LktzBqampivn2NjPkjHjw46xM2ve0+IrWIiZmZ+IiFVXrE+rxl2q7/AG79Knvw4p92Da6y2sMxe8THif4OG8eaf+9kjz+/bSPxyNcev/6hnNeo7lMvYHsDXcv0RsbeLUzberhyfzOpdj3+KYseOPyjXm819uP2+/JaKzPiJijB6A6R9N/oF4rH1l6hdPQ7jd9ra2Pc4voLXmubT6ayzPuxzvZo92KNiI9tpiYtanxNKW81yg8z2C9AvWXdvhtv1B+qjrzY7cdurVnkNnmub2I/qnLxPmZvjjPMzSLe3zGTLEzf3U+3TJFvMcuuvUt0hobn/YF9OrtJs9Oa/M3/AKbm6ow6+TZ6p6im1Yia4ctvdm1sVp+5PtraLTE+YjDHupOZxPTPrP8AqpdwP6zy+5fj+iOO3vE7OWtsHB8LW3xauti8+7ZzxSPnxNr+ZrF70raJi0n0q+ifs16TuCjH0dxn9V6o2sMY+S6m5DHE7mz8zM0xx8xr4vM+Pt4/HmK1983tWLAiP6OvpJ8Zxk6PdD1XTHMcvkvXc1+kKZffrYbTHu87+WJ/x7+6YmcVZ+35r4vbLFppFmOjo6XGaWvxvG6eDU1NTFTBr6+DHGPHhx1iIrSlY8RWsRERER8REP7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAClL6lPr55jvN1VyvYvtXy+TV7fcLs20+S2tbN/5/tYr/AJWm0fE61L1/CvmYvNYyTMxNYrOD6qXqB6w7G+nSOL6J1NjDvde7l+nsvLU+K8fr2w3vl9tonzGbJStqUn+0fctExatVWfpY9BvfH1S8tr7HC8Pm6c6P93na6n5PWtGrWvxMxgp8W2cnifitJiv/AFXr+weC7TdadW9K8lp8P2J6d3tnuJy97auvzOpqzs8lg99bVnDxmOsTOC9q2t7s8RObxFYpOGIv9ywr0i/SJ92XT7k+rPYvsbGS38rF0hrbPuibzPnzv7FZ/Kf7zixW/ft92Sfyxpwem70fdjvS5wVOP7cdL48nMZKeN7qHkIrm5LctMRE+cvj/AA6fEf4eOK0+PPibTNp3YDB4Tg+F6a4jT6f6c4jS4ri+Pw119PR0temDX18VY8Vx48dIitKxHxERERDOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGBzfA8F1Nx2Th+o+F0OV0M01nJq72tTPhvNZiazNLxNZ8TETHx8TDMxYsWDFTBgx0x48dYpSlIiK1rEeIiIj9RDmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q==");
selersignaturePad.off();

const customersignaturePad = new SignaturePad(customerCanvas, {
    minWidth: 2,
    maxWidth: 3,
    backgroundColor: 'rgb(255, 255, 255)',
    penColor: "black"
});

  function resizeCanvas() {
    const ratio =  Math.max(window.devicePixelRatio || 1, 1);
    customerCanvas.width = customerCanvas.offsetWidth * ratio;
    customerCanvas.height = customerCanvas.offsetHeight * ratio;
    customerCanvas.getContext("2d").scale(ratio, ratio);
    customersignaturePad.clear();
}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();


customersignaturePad.addEventListener("afterUpdateStroke", () => {
    document.querySelector("#customer-signature-value").value=customersignaturePad.toDataURL("image/jpeg");
});

resetCustomer.addEventListener('click',()=>{
    customersignaturePad.clear();
})