<script>
export default {
  data: [
    {
      title: "Standard Avatar",
      previewCode: `<div class="avatar">
              <div class="w-24 rounded">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
          </div>`,
    },
    {
      title: "Avatar in Custom Sizes",
      previewCode: `
    <div class="flex space-x-4">
        <div class="avatar">
            <div class="w-32 rounded">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div class="avatar">
            <div class="w-20 rounded">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
            </div>
        </div>
        <div class="avatar">
            <div class="w-16 rounded">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
            </div>
        </div>
        <div class="avatar">
            <div class="w-8 rounded">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="Tailwind-CSS-Avatar-component" />
            </div>
        </div>
    </div>`,
    },
    {
      title: "Avatar Rounded",
      previewCode: `
    <div class="avatar">
        <div class="w-24 rounded-xl">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>
    <div class="avatar">
        <div class="w-24 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>`,
    },
    {
      title: "Avatar with Mask",
      previewCode: `
    <div class="avatar">
        <div class="w-24 mask mask-squircle">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>
    <div class="avatar">
        <div class="w-24 mask mask-hexagon">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>
    <div class="avatar">
        <div class="w-24 mask mask-triangle">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
    </div>`,
    },
    {
      title: "Avatar Group",
      previewCode: `
    <div class="avatar-group -space-x-6 rtl:space-x-reverse">
        <div class="avatar">
            <div class="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div class="avatar">
            <div class="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div class="avatar">
            <div class="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div class="avatar">
            <div class="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
    </div>`,
    },
    {
      title: "Avatar Group with Counter",
      previewCode: `
    <div class="avatar-group -space-x-6 rtl:space-x-reverse">
        <div class="avatar">
            <div class="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div class="avatar">
            <div class="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div class="avatar">
            <div class="w-12">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
        </div>
        <div class="avatar placeholder">
            <div class="w-12 bg-neutral text-neutral-content">
                <span>+99</span>
            </div>
        </div>
    </div>`,
    },
    {
      title: "Avatar with Ring",
      previewCode: `
  <div class="avatar">
    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>`,
    },
    {
      title: "Avatar with Presence Indicator",
      previewCode: `
  <div class="avatar online">
    <div class="w-24 rounded-full">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>
  <div class="avatar offline">
    <div class="w-24 rounded-full">
      <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </div>`,
    },
    {
      title: "Avatar Placeholder",
      previewCode: `
  <div class="avatar placeholder">
    <div class="bg-neutral text-neutral-content rounded-full w-24">
      <span class="text-3xl">D</span>
    </div>
  </div>
  <div class="avatar online placeholder">
    <div class="bg-neutral text-neutral-content rounded-full w-16">
      <span class="text-xl">AI</span>
    </div>
  </div>
  <div class="avatar placeholder">
    <div class="bg-neutral text-neutral-content rounded-full w-12">
      <span>SY</span>
    </div>
  </div>
  <div class="avatar placeholder">
    <div class="bg-neutral text-neutral-content rounded-full w-8">
      <span class="text-xs">UI</span>
    </div>
  </div>`,
    },
  ],
};
</script>
