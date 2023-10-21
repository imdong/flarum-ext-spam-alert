<?php

namespace ImDong\SpamAlert\Common;

use Symfony\Contracts\Translation\TranslatorInterface;

class Defined
{
    /**
     * @var string 插件的前缀 应该与 js 侧保持一致
     */
    public static  $extPrefix = 'imdong-spam-alert';

    /**
     * @var Defined|null 我自己
     */
    private static $_instance = null;

    /**
     * @var mixed|TranslatorInterface
     */
    private $translator;

    private function __construct()
    {
        $this->translator = resolve(TranslatorInterface::class);
    }

    /**
     * @return static
     */
    private static function getInstance()
    {
        if (!self::$_instance) {
            self::$_instance = new self();
        }

        return self::$_instance;
    }

    /**
     * 获取完整的 key
     *
     * @param string $key
     * @return string
     */
    public static function key(string $key): string
    {
        if ($key['0'] == '.') {
            $key = ltrim($key, '.');
        }

        return sprintf('%s.%s', self::$extPrefix, $key);
    }

    /**
     * 获取翻译
     *
     * (似乎有问题，会导致翻译全部失效)
     *
     * @param string $key
     * @return string
     * @deprecated
     */
    public static function trans(string $key): string
    {
        return self::getInstance()->translator->trans(self::key($key));
    }
}
