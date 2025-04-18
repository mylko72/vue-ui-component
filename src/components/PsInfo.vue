<template>
  <div class="w-8/12 mx-10 my-5">
    <fieldset class="flex flex-col divide-y">
        <p class="flex py-4">
          <label for="cufc1" class="flex-none w-32 mr-4 text-slate-600">Name<span aria-hidden="true">*</span>:</label>
          <input type="text" value="" name="Name" id="cufc1" class="px-2 py-1 border border-slate-400 rounded-md" aria-required="true">
        </p>
        <p class="flex py-4">
          <label for="cufc2" class="flex-none w-32 mr-4 text-slate-600">Email<span aria-hidden="true">*</span>:</label>
          <input type="text" value="" name="Email" id="cufc2" class="px-2 py-1 border border-slate-400 rounded-md" aria-required="true">
        </p>
        <p class="flex py-4">
          <label for="cufc3" class="flex-none w-32 mr-4 text-slate-600">Phone:</label>
          <input type="text" value="" name="Phone" id="cufc3" class="px-2 py-1 border border-slate-400 rounded-md">
        </p>
        <p class="flex py-4">
          <label for="cufc4" class="flex-none w-32 mr-4 text-slate-600">Extension:</label>
          <input type="text" value="" name="Ext" id="cufc4" class="px-2 py-1 border border-slate-400 rounded-md">
        </p>
        <p class="flex py-4">
          <label for="cufc5" class="flex-none w-32 mr-4 text-slate-600">Country:</label>
          <input type="text" value="" name="Country" id="cufc5" class="px-2 py-1 border border-slate-400 rounded-md">
        </p>
        <p class="flex py-4">
          <label for="cufc6" class="flex-none w-32 mr-4 text-slate-600">City/Province:</label>
          <input type="text" value="" name="City_Province" id="cufc6" class="px-2 py-1 border border-slate-400 rounded-md">
        </p>
      </fieldset>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>