<script lang="ts">
  import { Editor as E } from "bytemd";
  export let value = "";

  // editor configs
  export let mode: "tab" | "split" | "auto" = "split";

  const handleChange = (e: any) => value = e.detail.value;
</script>


<E value={value} {mode} on:change={handleChange} />
