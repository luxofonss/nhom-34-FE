import { useFormContext } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

const initOptions = [
  { name: 'Yes', value: 1 },
  { name: 'No', value: 0 }
]

function AppCheckbox({
  name,
  label,
  wrapperStyle = {},
  required = false,
  disabled = false,
  defaultValue = null,
  validate,
  options = initOptions,
  ...props
}) {
  const {
    register,
    formState: { errors }
  } = useFormContext()

  console.log('defaultValue:: ', defaultValue)

  return (
    <div className='relative my-2 w-full flex-col' style={wrapperStyle}>
      <div
        className={`mb-1.5 font-semibold block w-full ${
          !errors[name]?.type ? 'text-neutral-400' : 'text-secondary-orange'
        }`}
      >
        {label}
      </div>

      <div className='flex items-center gap-6 ml-8'>
        {options.map((option) => {
          return (
            <div className='flex gap-2 items-center' key={uuidv4(option.value)}>
              <input
                id={option.value}
                type='checkbox'
                {...register(name, {
                  ...validate,
                  ...(required ? { required: 'Bạn phải chọn 1 giá trị' } : {})
                  // onChange: (e) => handleInputChange(e.target.value)
                })}
                name={name}
                value={option.value}
                {...props}
                disabled={disabled}
              />
              <label className='cursor-pointer' htmlFor={option.value}>
                {option.name}
              </label>
            </div>
          )
        })}
      </div>
      {errors && errors[name]?.type === 'required' && (
        <div className='text-secondary-orange '>{errors[name].message}</div>
      )}
    </div>
  )
}

export default AppCheckbox