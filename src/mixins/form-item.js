
export const formItemMixin = {
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    handleInput(evt) {
      const value = evt.target.value;
      this.$emit("input", value);
    }
  },
}
